import { AZ } from './az.mjs';
import { Scene } from './scene.mjs'
import { transformZoneCriteria, buildTokenFlag, compareCriteria, generateTokenCriteria } from './token.mjs';
import { Engine } from './engine.mjs';

// import path: import { NewClientInit } from './initialize-data.js';

export class NewClientInit {

    static activate() {
        this.hooksFirstCanvasReady();
        hooksTokenChange(); // ONLY PUTTING THIS HERE TEMPORARILY!!!
        hooksActorChange(); // ONLY PUTTING THIS HERE TEMPORARILY!!!
        hooksEffectChange();
    }

    static hooksFirstCanvasReady() {
        const hookID = Hooks.on('canvasReady', (canvas) => {
          Hooks.off('canvasReady', hookID);
            // if not GMclient or GM already on, unhook, re-register appropriate canvasInit hook(s) and bail:
            if(!game.user.isGM || AZ.gm().count > 1) { 
            game.user.isGM ? hookSequentSceneLoadsGM() : hookSequentSceneLoadsPlayer(); //on nonGM clients this should be different, pass execution to GM right away
            return
            };
            // we now know this is a GM logging in for the first time with no other GM on
            
            // loop all scenes
            for (const scene of game.scenes) {
                // if scene has at least one viewer, run init
                if (scene.isView) {
                  gmRebuildScene(scene, game.user.id)
                };
            };
            // hook on future canvas loads as GM
            hookSequentSceneLoadsGM();
        });
    }

} // end of class NewClientInit



/* Gabe, this is the function!!! */
export async function gmRebuildScene(scene, clientId = game.user.id) {  // this function must run on GM client, but can be called by player client
  if (AZ.info.isDebug) {console.time('sceneRebuild')};
  AZ.log(
    true,
    `GM client ${game.user.name} initiating aura zones rebuild on scene ${scene.name}`
  );
  const client = game.users.get(clientId);
  AZ.log(false, 'triggering user is:', client.name);

  await Scene.clearAZ_Flag(scene); // clear existing AZ scene flag data
  await Scene.removeCreatedEffects(scene); // get rid of all created az effects on scene, is essential to await this

  const accum_zones = {}; // collects zones keyed by azId { AZ12345678987654: { bunch of zone data }, etc... }
  const accum_tokens = {}; // collects token flag data objects keyed by token id { tokenID1232113z3: {bunch of data for token flag}}, etc... }
  const accum_tokenCriteria = {}; // collects token criteria keyed by token id { tokenID1232113z3: ['bunch', 'of', 'token', 'criteria'], etc... }
  const accum_appliedToActor = {}; // MALTS only: {'some_zone_id': {'some_actor_id': 'some_applied_effect_id'}, ....etc}, ...etc}

  /* tokens loop 1 */
    for (const tokenDoc of scene.tokens) {
        if (tokenDoc.actor === null) continue; // skip null actor
        //const isSynthetic = !tokenDoc.data.actorLink;
        const activeTokens = tokenDoc.actor.getActiveTokens(true).map(t => t.id);
        const isMALTS = activeTokens.length > 1;
        // build or get token flag data for token
        let tokenFlag;

        // There could be MALTS (Multiples of Actor Linked Tokens on Scene)
        if (tokenDoc.id in accum_tokens) { // if the this token's id is in accum_tokens already it is a non-first-MALTS
          tokenFlag = accum_tokens[tokenDoc.id]; // get the existing token flag data instead of building anew
          accum_tokenCriteria[tokenDoc.id] = generateTokenCriteria(tokenDoc); // accumulate this token's criteria (could be different even though MALTS)
        } else { // not a MALTS or is a first pass MALTS
          tokenFlag = buildTokenFlag(tokenDoc);
          accum_tokens[tokenDoc.id] = tokenFlag;
          accum_tokenCriteria[tokenDoc.id] = generateTokenCriteria(tokenDoc);
        };

        // now we need to add the flag to other MALTS...
        if (tokenFlag.azSource && isMALTS) { //
          const otherTokenIDs = activeTokens.filter(id => id !== tokenDoc.id); // get ids of other MALTS
          // add the flag object for other MALTS (if they don't have it)
          for (const id of otherTokenIDs) {
            if (accum_tokens?.[id] !== undefined) continue; // if this MALT was already processed, skip it
            accum_tokens[id] = tokenFlag;
          };
        };

        if (tokenFlag.azSource) {
            for (const entry of tokenFlag.sourceOf) {
                const { zone } = entry;
                if (accum_zones?.[zone.azId]) continue; // skip if zone is already there (because MALTS)
                zone.zoneCriteria = transformZoneCriteria(zone.zoneCriteria);
                zone.candidates = [];
                accum_zones[zone.azId] = zone;
            };
        };
    }; 
  /* end of tokens loop 1 */


  /* tokens loop 2 */
    for (const tokenDoc of scene.tokens) {
      const tActor = tokenDoc.actor;
      const isSynthetic = !tokenDoc.data.actorLink;
      const activeTokens = tActor.getActiveTokens(true).map(t => t.id);
      const isMALTS = activeTokens.length > 1;
      if (tActor === null) continue; // skip null actors
      const tokenId = tokenDoc.id;
      
      const alreadyCloned = {}; // {'zoneID': 'actorId'}
      const alreadyApplied = {}; // {'zoneID': 'actorId'}

        /*zones loop */
        for (const [azId, zone] of Object.entries(accum_zones)) {
            const isCloned = !!alreadyCloned?.[azId] && alreadyCloned[azId] === tActor.id;
            const isApplied = !!alreadyApplied?.[azId] && alreadyApplied[azId] === tActor.id;
            /* is token a source of this zone? */
            if(zone.origin.tokenIDs.includes(tokenId)) { // if this token is a source of the zone

                /* CLONING */
                if ( // if this zone effect is to be cloned and...clone does not already exist
                  !isCloned && zone.cloneOnSource
                  ) { // add the cloned effect:
                    const { effectData } = duplicate(zone);
                    effectData.label = effectData.label.replace('az-applied','az-clone');
                    effectData.changes = [];
                    effectData.disabled = false;
                    await tActor.createEmbeddedDocuments('ActiveEffect', [zone.effectData]);
                    if (isMALTS) alreadyCloned[azId] = tActor.id;
                };
                /* done with cloning */

                /* APPLIED EFFECT ON SOURCE */
                if(alreadyApplied) console.log('alreadyApplied is true');
                if (zone.excludeSource) {continue};
                if (!isApplied && compareCriteria (accum_tokenCriteria[tokenId], zone.zoneCriteria)) {
                    const { effectData } = duplicate(zone);
                    effectData.disabled = false;
                    const [{ id }] = await tActor.createEmbeddedDocuments('ActiveEffect', [zone.effectData]); // add applied effect to source token's actor
                    if (isMALTS) {
                      console.log('isMALTS:', isMALTS);
                      alreadyApplied[azId] = tActor.id;
                      accum_appliedToActor[azId] = { [tActor.id]: id };
                    };
                }; /* done with token as source */
              }
              /* token is not a source, is it a candidate? */
              else if (compareCriteria(accum_tokenCriteria[tokenId], zone.zoneCriteria)) {
                const { effectData } = duplicate(zone);
                const inZone = Engine.isSingletonInZone(tokenDoc, zone);
                let id;
                console.log('-------------------------------------');
                console.log('id:', id);
                console.log ('isMALTS:', isMALTS);
                console.log ('accum_appliedToActor?.[azId] !== undefined',accum_appliedToActor?.[azId] !== undefined);
                console.log('tActor.id in accum_appliedToActor[azId]',tActor.id in accum_appliedToActor[azId]);
                if (isMALTS && accum_appliedToActor?.[azId] !== undefined && tActor.id in accum_appliedToActor[azId]) {
                  id = accum_appliedToActor[azId][tActor.id];
                  if (inZone) await tActor.updateEmbeddedDocuments('ActiveEffect', [{ _id: id, disabled: false }]);
                } else {
                  effectData.disabled = inZone;
                  [{ id }] = await tActor.createEmbeddedDocuments('ActiveEffect', [effectData]);
                  if (isMALTS) {accum_appliedToActor[azId] = { [tActor.id]: id }};
                }
                accum_zones[azId].candidates.push([tokenId, id]); // accumulate the canidates, tokenId & applied effectId pairs
                accum_tokens[tokenId].candidateFor.push([azId, id]); // accumulate token candidateFor azId & applied effectId pairs
                console.log('-------------------------------------');      
              }
              /* done  with candidate */

              else {continue}; /* token is not a source and not eligible */

        }  /* end of zones loop */

  }/* end of tokens loop 2 */
  

  /* tokens loop 3 */
    for (const tokenDoc of scene.tokens) {
        if (tokenDoc.actor === null) continue; // skip null actors
        const tokenFlag = accum_tokens[tokenDoc.id]; // get the token's flag data from accumulator
        for (const entry of tokenFlag.sourceOf) {
          const { zone } = entry;
          zone.candidates = accum_zones[zone.azId].candidates; // add candidates array(s) to each zone's data in flag 
        };
        await tokenDoc.update({ [AZ.flag.base]: tokenFlag }); // set the flag on token
    };
  /* end of tokens loop 3 */

  /* done processing tokens */

  /* add scene flag */
  await scene.update({ [AZ.flag.base]: {
    zoneOnScene: Object.keys(accum_zones).length > 0 ? true : false,
    zones: accum_zones,
  }
 });
 if (AZ.info.isDebug) {console.timeEnd('sceneRebuild')};
} // end of gmRebuildScene()



function hookSequentSceneLoadsGM() {
  const hookID = Hooks.on('canvasReady', (_canvas, userId = game.user.id) => {
    //if (game.users.contents.filter(u => u.viewedScene === _canvas.scene.id).length > 1) return;
    gmRebuildScene(_canvas.scene, userId);
  });
}

function hookSequentSceneLoadsPlayer() {
  const hookID = Hooks.on('canvasReady', (_canvas, userId = game.user.id) => {
    if (!AZ.gm().online) return; // if no gm online, don't do anything
    //if (game.users.contents.filter(u => u.viewedScene === _canvas.scene.id).length > 1) return; // if this scene already has a viewer, it doesn't need rebuilt
    // TODO: need to execute as gm
    gmRebuildScene(canvas.scene, userId);
  });
}

function hooksTokenChange() {
  Hooks.on('updateToken', (tokenDoc, updates, options, userId) => {
    if ('disposition' in updates || 'actorLink' in updates || updates.flags?.tagger) {
      // TODO: need to execute as gm
      gmRebuildScene(tokenDoc.parent, userId);
    };
  });
}

function hooksActorChange() {
  Hooks.on('updateActor', (actorDoc, updates, options, userId) => {
    console.log('Actor Change!!');
    console.log('updates:',updates);
    console.log('options:', options);
    if (!('data' in updates)) return;
    console.log('key data is in update');
    const details = updates.data?.details ?? {};
    console.log('data.details:', details);
    if(!('traits' in updates.data || (
      'alignment' in details 
      || 'type' in details 
      || 'race' in details 
      || 'background' in details 
    ))) return;
    if(actorDoc.parent !== null) {
      // TODO: need to execute as gm
      console.log('actorDoc.parent is not null, actorDoc.parent.parent is:', actorDoc.parent.parent);
      gmRebuildScene(actorDoc.parent.parent, userId);
      console.log('------------------');
    } else {
      const scene = game.scenes.get(
        game.users.get(userId).viewedScene
      );
      // TODO: need to execute as gm
      if(scene) gmRebuildScene(scene, userId);
      console.log('------------------');
    };
      // if the actor has no active tokens on a viewed Scene return;
  })
}

function hooksEffectChange() {
  Hooks.on('preUpdateActiveEffect', (effectDoc, updates, options, userId) => {
    console.log('hooksEffectChange()firing with args[1]:', updates)
    if(Object.keys(updates).length === 2 && 'disabled' in updates) return; // TODO: could some other module add a key?????
    //if('flags' in updates)
    let doRebuild = true;

    console.log('--------------------------');
    console.log('preUpdateActiveEffect');
    console.log('ActiveEffect Doc:', duplicate(effectDoc));
    console.log('updates:', duplicate(updates));
    console.log('options:', options);
    console.log('--------------------------');
    options._AZrebuild = doRebuild;
    options._AZscene = game.user.viewedScene;
    console.log('changed options:', options);
  })
}

function hooksEffectDelete(){};
function hooksEffectCreation(){};
function hooksPasteToken(){};
function hooksDropObjectOnCanvas(){};

// making a new effect does not  trigger the updates/preupdates
// there is no AZ flag data on a new effect unless...
  // you open the effect sheet and then hit Submit, regardless if there was any change
  // even if you make no change to effect, the AZ flag will be added with no azId.

// info about pre-update and update hooks
// https://discord.com/channels/170995199584108546/722559135371231352/993473457658548255