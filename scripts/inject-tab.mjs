import { AZ } from './az.mjs';
import { buildEffectFlag } from './effect.mjs';
import { CSS, stringToHTML } from './miscellaneous.mjs'; // TODO: rename miscellaneous file

export class InjectAuraTab {
  /**
   * Contains all functions of the class
   *   that need to be instantiated
   *   and are never called elsewise.
   */
  static activate() {

    /**
     * Hooks the Aura tab configuration for ActiveEffect app.
     * @param  {string} renderActiveEffectConfig the name of the hook
     * @param  {function} anonymous contains the html and methods for the app tab
     * @returns {string} the hook ID
     */
    Hooks.on('renderActiveEffectConfig', async (app, [html]) => {
      
      const zoneData = app.object.data.flags?.[AZ.info.name]?.[AZ.info.version] ?? buildEffectFlag(app.object);
      const tab_label = game.i18n.format('AZCONFIG.tab-label');
      const is_aura_zone = game.i18n.format('AZCONFIG.is-aura-zone');
      const radius_Label = game.i18n.format('AZCONFIG.radius.Label');
      const point_padding = game.i18n.format(
        'AZCONFIG.point-padding'
      );
        const center = game.i18n.format('AZCONFIG.center');
        const edges = game.i18n.format('AZCONFIG.edge');

      const check3D = game.i18n.format('AZCONFIG.check-3D.Use');
        const shape = game.i18n.format('AZCONFIG.check-3D.Shape');
        const sphere = game.i18n.format('AZCONFIG.check-3D.Sphere');
        const cylinder = game.i18n.format('AZCONFIG.check-3D.Cylinder');
        const cylHeightLabel = game.i18n.format(
          'AZCONFIG.check-3D.CylinderHeight.Label'
        );

      const forceDisplay = game.i18n.format(
        'AZCONFIG.display-on-recipient'
      );
      const excludeSource = game.i18n.format(
        'AZCONFIG.exclude-source'
      );
      const cloneEffect = game.i18n.format('AZCONFIG.clone');


      const critAll = game.i18n.format('AZCONFIG.criteria.All');
        const typeUse = game.i18n.format(
          'AZCONFIG.criteria.ActorType.Use'
        );
        const typeNPC = game.i18n.format(
          'AZCONFIG.criteria.ActorType.NPC'
        );
        const typePC = game.i18n.format(
          'AZCONFIG.criteria.ActorType.PC'
        );
        const typeVehicle = game.i18n.format(
          'AZCONFIG.criteria.ActorType.Vehicle'
        );

        const alignUse = game.i18n.format(
          'AZCONFIG.criteria.Alignment.Use'
        );
          const alignLG = game.i18n.format(
            'AZCONFIG.criteria.Alignment.LG'
          );
          const alignNG = game.i18n.format(
            'AZCONFIG.criteria.Alignment.NG'
          );
          const alignCG = game.i18n.format(
            'AZCONFIG.criteria.Alignment.CG'
          );
          const alignLN = game.i18n.format(
            'AZCONFIG.criteria.Alignment.LN'
          );
          const alignNN = game.i18n.format(
            'AZCONFIG.criteria.Alignment.NN'
          );
          const alignCN = game.i18n.format(
            'AZCONFIG.criteria.Alignment.CN'
          );
          const alignLE = game.i18n.format(
            'AZCONFIG.criteria.Alignment.LE'
          );
          const alignNE = game.i18n.format(
            'AZCONFIG.criteria.Alignment.NE'
          );
          const alignCE = game.i18n.format(
            'AZCONFIG.criteria.Alignment.CE'
          );

        const dispUse = game.i18n.format(
          'AZCONFIG.criteria.Disposition.Use'
        );
          const dispF = game.i18n.format(
            'AZCONFIG.criteria.Disposition.Friendly'
          );
          const dispN = game.i18n.format(
            'AZCONFIG.criteria.Disposition.Neutral'
          );
          const dispH = game.i18n.format(
            'AZCONFIG.criteria.Disposition.Hostile'
          );

        const szUse = game.i18n.format('AZCONFIG.criteria.Size.Use');
          const szTiny = game.i18n.format('AZCONFIG.criteria.Size.Tiny');
          const szSm = game.i18n.format('AZCONFIG.criteria.Size.Sm');
          const szMed = game.i18n.format('AZCONFIG.criteria.Size.Med');
          const szLg = game.i18n.format('AZCONFIG.criteria.Size.Lg');
          const szHuge = game.i18n.format('AZCONFIG.criteria.Size.Huge');
          const szGrg = game.i18n.format('AZCONFIG.criteria.Size.Grg');

        const ctUse = game.i18n.format('AZCONFIG.criteria.Type.Use');
          const ctAber = game.i18n.format(
            'AZCONFIG.criteria.Type.Aberration'
          );
          const ctBeast = game.i18n.format(
            'AZCONFIG.criteria.Type.Beast'
          );
          const ctCelest = game.i18n.format(
            'AZCONFIG.criteria.Type.Celestial'
          );
          const ctConstruct = game.i18n.format(
            'AZCONFIG.criteria.Type.Construct'
          );
          const ctDragon = game.i18n.format(
            'AZCONFIG.criteria.Type.Dragon'
          );
          const ctElemental = game.i18n.format(
            'AZCONFIG.criteria.Type.Elemental'
          );
          const ctFey = game.i18n.format('AZCONFIG.criteria.Type.Fey');
          const ctFiend = game.i18n.format(
            'AZCONFIG.criteria.Type.Fiend'
          );
          const ctGiant = game.i18n.format(
            'AZCONFIG.criteria.Type.Giant'
          );
          const ctHumanoid = game.i18n.format(
            'AZCONFIG.criteria.Type.Humanoid'
          );
          const ctMonst = game.i18n.format(
            'AZCONFIG.criteria.Type.Monstrosity'
          );
          const ctOoze = game.i18n.format('AZCONFIG.criteria.Type.Ooze');
          const ctPlant = game.i18n.format(
            'AZCONFIG.criteria.Type.Plant'
          );
          const ctUndead = game.i18n.format(
            'AZCONFIG.criteria.Type.Undead'
          );

        const swarm = game.i18n.format('AZCONFIG.criteria.Swarm');

        const subRaceUse = game.i18n.format(
          'AZCONFIG.criteria.Subtype-Race.Use'
        );
          const subRaceLabel = game.i18n.format(
            'AZCONFIG.criteria.Subtype-Race.Label'
          );
          const subRaceHint = game.i18n.format(
            'AZCONFIG.criteria.Subtype-Race.Hint'
          );

        const customUse = game.i18n.format(
          'AZCONFIG.criteria.CustomTypeBG.Use'
        );
          const customLabel = game.i18n.format(
            'AZCONFIG.criteria.CustomTypeBG.Label'
          );
          const customHint = game.i18n.format(
            'AZCONFIG.criteria.CustomTypeBG.Hint'
          );

        const tagsTitle = game.i18n.format(
          'AZCONFIG.criteria.Override.Title'
        );
        const tagsText = game.i18n.format(
          'AZCONFIG.criteria.Override.Text'
        );
        const inclLabel = game.i18n.format(
          'AZCONFIG.criteria.IncludeTag.Label'
        );
        const inclHint = game.i18n.format(
          'AZCONFIG.criteria.IncludeTag.Hint'
        );
        const exclLabel = game.i18n.format(
          'AZCONFIG.criteria.ExcludeTag.Label'
        );
        const exclHint = game.i18n.format(
          'AZCONFIG.criteria.ExcludeTag.Hint'
        );

      const appliedEffect = game.i18n.format(
        'Contents.applied-effect'
      );

      const contentString = zoneData.isAuraZone === null
        ? `
            <!-- AuraZones Tab -->
            <section class="tab" data-tab="AuraZones">
                <h3> ${appliedEffect} </h3>
            </section>
          `
        :
          `
            <!-- AuraZones Tab -->
            <section class="tab" data-tab="AuraZones">
              <div class="form-group bb1">
                <label>${is_aura_zone}</label>
                <input id="isAuraZone" name="${AZ.flag.base}.isAuraZone" type="checkbox" ${ zoneData?.isAuraZone ? 'checked' : '' }></input>
              </div>
              <div id="bigDiv" class="AZvisible">
                <div class="form-group" style="display: block;">
                  <label>${radius_Label}</label>
                  <input class="numberIn" name="${AZ.flag.base}.zone.radius" type="number" min="0" step="any" value="${zoneData.zone?.radius}"></input>
                </div>
                <div class="form-group" id="AZpPadding">
                  <label for="padding">${point_padding}</label>
                  <select id="AZselectPadding" name="${AZ.flag.base}.zone.pointPadding">
                    <option value="center" ${ zoneData.zone.pointPadding === 'center' ? 'selected' : '' }>${center}</option>
                    <option value="edges" ${ zoneData.zone.pointPadding === 'edges' ? 'selected' : '' }>${edges}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>${check3D}</label>
                  <input id="check3D" name="${AZ.flag.base}.zone.check3D.bool" type="checkbox" ${ zoneData.zone.check3D.bool ? 'checked' : '' }></input>
                </div>
                <div id="toggle3D" class="${
                                zoneData.zone.check3D.bool
                                  ? 'AZvisible'
                                  : 'AZhidden'
                              }">
                  <div id="cylsphere" class="form-group">
                    <label for="shape">${shape}</label>
                    <select id="AZselectShape" name="${AZ.flag.base}.zone.check3D.shape">
                      <option value="sphere" ${ zoneData.zone.check3D?.shape==='sphere' ? 'selected' : '' }>${sphere}</option>
                      <option value="cylinder" ${ zoneData.zone.check3D?.shape==='cylinder' ? 'selected' : '' }>${cylinder}</option>
                    </select>
                  </div>
                  <div class="form-group" id="cylHeight">
                    <label id="cylHeightLabel" class="${
                                        zoneData.zone.check3D.shape === 'sphere'
                                          ? 'AZdim'
                                          : 'AZbright'
                                      }">${cylHeightLabel}</label>
                    <input class="numberIn" name="${AZ.flag.base}.zone.check3D.cylHeight" type="number" min="0" step="any" value="${
                    zoneData.zone.check3D.cylHeight
                  }"></input>
                  </div>
                </div>
                <div class="form-group">
                  <label>${forceDisplay}</label>
                  <input name="${AZ.flag.base}.zone.displayApplied" type="checkbox" ${ zoneData.zone.displayApplied ? 'checked' : '' }></input>
                </div>
                <div class="form-group">
                  <label>${excludeSource}</label>
                  <input name="${AZ.flag.base}.zone.excludeSource" type="checkbox" ${ zoneData.zone.excludeSource ? 'checked' : '' }></input>
                </div>
                <div class="form-group">
                  <label>${cloneEffect}</label>
                  <input name="${AZ.flag.base}.zone.cloneOnSource" type="checkbox" ${ zoneData.zone.cloneOnSource ? 'checked' : '' }></input>
                </div>
                <div class="form-group">
                  <label>${critAll}</label>
                  <input id="critAll" name="${AZ.flag.base}.zone.zoneCriteria.allTokens" type="checkbox" ${ zoneData.zone.zoneCriteria?.allTokens ? 'checked' : ''
                    }></input>
                </div>
                <div id="toggleAllCrit" class="${
                                zoneData.zone.zoneCriteria?.allTokens
                                  ? 'AZhidden'
                                  : 'AZvisible'
                              }">
                  <div class="form-group">
                    <label>${typeUse}</label>
                    <input id="typeUse" name="${AZ.flag.base}.zone.zoneCriteria.actorType.bool" type="checkbox" ${ zoneData.zone.zoneCriteria?.actorType?.bool ? 'checked'
                      : '' }></input>
                  </div>
                  <div id="type" class="groovy ${
                                    zoneData.zone.zoneCriteria?.actorType?.bool
                                      ? 'AZvisible'
                                      : 'AZhidden'
                                  }">
                    <div class="form-group">
                      <label>${typePC}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.actorType.character" type="checkbox" ${ zoneData.zone.zoneCriteria?.actorType?.character ? 'checked'
                        : '' }></input>
                    </div>
                    <div class="form-group">
                      <label>${typeNPC}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.actorType.npc" type="checkbox" ${ zoneData.zone.zoneCriteria?.actorType?.npc ? 'checked' : ''
                        }></input>
                    </div>
                    <div class="form-group">
                      <label>${typeVehicle}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.actorType.vehicle" type="checkbox" ${ zoneData.zone.zoneCriteria?.actorType?.vehicle ? 'checked' : ''
                        }></input>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>${alignUse}</label>
                    <input id="alignUse" name="${AZ.flag.base}.zone.zoneCriteria.alignment.bool" type="checkbox" ${ zoneData.zone.zoneCriteria?.alignment?.bool ? 'checked'
                      : '' }></input>
                  </div>
                  <div id="alignment" class="groovy ${
                                    zoneData.zone.zoneCriteria?.alignment?.bool
                                      ? 'AZvisible'
                                      : 'AZhidden'
                                  }">
                    <div class="form-group tar">
                      <label>${alignLG}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.alignment.lg" type="checkbox" ${ zoneData.zone.zoneCriteria?.alignment?.lg ? 'checked' : '' }></input>
            
                      <label>${alignNG}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.alignment.ng" type="checkbox" ${ zoneData.zone.zoneCriteria?.alignment?.ng ? 'checked' : '' }></input>
            
                      <label>${alignCG}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.alignment.cg" type="checkbox" ${ zoneData.zone.zoneCriteria?.alignment?.cg ? 'checked' : '' }></input>
                    </div>
                    <div class="form-group tar">
                      <label>${alignLN}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.alignment.ln" type="checkbox" ${ zoneData.zone.zoneCriteria?.alignment?.ln ? 'checked' : '' }></input>
            
                      <label>${alignNN}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.alignment.nn" type="checkbox" ${ zoneData.zone.zoneCriteria?.alignment?.nn ? 'checked' : '' }></input>
            
                      <label>${alignCN}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.alignment.cn" type="checkbox" ${ zoneData.zone.zoneCriteria?.alignment?.cn ? 'checked' : '' }></input>
                    </div>
                    <div class="form-group tar">
                      <label>${alignLE}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.alignment.le" type="checkbox" ${ zoneData.zone.zoneCriteria?.alignment?.le ? 'checked' : '' }></input>
            
                      <label>${alignNE}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.alignment.ne" type="checkbox" ${ zoneData.zone.zoneCriteria?.alignment?.ne ? 'checked' : '' }></input>
            
                      <label>${alignCE}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.alignment.ce" type="checkbox" ${ zoneData.zone.zoneCriteria?.alignment?.ce ? 'checked' : '' }></input>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>${dispUse}</label>
                    <input id="dispUse" name="${AZ.flag.base}.zone.zoneCriteria.disposition.bool" type="checkbox" ${ zoneData.zone.zoneCriteria?.disposition?.bool
                      ? 'checked' : '' }></input>
                  </div>
                  <div id="disposition" class="groovy ${
                                    zoneData.zone.zoneCriteria?.disposition?.bool
                                      ? 'AZvisible'
                                      : 'AZhidden'
                                  }">
                    <div class="form-group">
                      <label>${dispF}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.disposition.friendly" type="checkbox" ${ zoneData.zone.zoneCriteria?.disposition?.friendly ? 'checked'
                        : '' }></input>
                    </div>
                    <div class="form-group">
                      <label>${dispN}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.disposition.neutral" type="checkbox" ${ zoneData.zone.zoneCriteria?.disposition?.neutral ? 'checked'
                        : '' }></input>
                    </div>
                    <div class="form-group">
                      <label>${dispH}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.disposition.hostile" type="checkbox" ${ zoneData.zone.zoneCriteria?.disposition?.hostile ? 'checked'
                        : '' }></input>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>${szUse}</label>
                    <input id="szUse" name="${AZ.flag.base}.zone.zoneCriteria.size.bool" type="checkbox" ${ zoneData.zone.zoneCriteria?.size?.bool ? 'checked' : ''
                      }></input>
                  </div>
                  <div id="size" class="groovy ${
                                    zoneData.zone.zoneCriteria?.size?.bool
                                      ? 'AZvisible'
                                      : 'AZhidden'
                                  }">
                    <div class="form-group">
                      <label>${szTiny}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.size.tiny" type="checkbox" ${ zoneData.zone.zoneCriteria?.size?.tiny ? 'checked' : '' }></input>
                    </div>
                    <div class="form-group">
                      <label>${szSm}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.size.sm" type="checkbox" ${ zoneData.zone.zoneCriteria?.size?.sm ? 'checked' : '' }></input>
                    </div>
                    <div class="form-group">
                      <label>${szMed}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.size.med" type="checkbox" ${ zoneData.zone.zoneCriteria?.size?.med ? 'checked' : '' }></input>
                    </div>
                    <div class="form-group">
                      <label>${szLg}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.size.large" type="checkbox" ${ zoneData.zone.zoneCriteria?.size?.large ? 'checked' : '' }></input>
                    </div>
                    <div class="form-group">
                      <label>${szHuge}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.size.huge" type="checkbox" ${ zoneData.zone.zoneCriteria?.size?.huge ? 'checked' : '' }></input>
                    </div>
                    <div class="form-group">
                      <label>${szGrg}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.size.grg" type="checkbox" ${ zoneData.zone.zoneCriteria?.size?.grg ? 'checked' : '' }></input>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>${ctUse}</label>
                    <input id="ctUse" name="${AZ.flag.base}.zone.zoneCriteria.creatureType.bool" type="checkbox" ${ zoneData.zone.zoneCriteria?.creatureType?.bool
                      ? 'checked' : '' }></input>
                  </div>
                  <div id="creatureType" class="groovy ${
                                    zoneData.zone.zoneCriteria?.creatureType?.bool
                                      ? 'AZvisible'
                                      : 'AZhidden'
                                  }">
                    <div class="form-group">
                      <label>${ctAber}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.creatureType.aberration" type="checkbox" ${ zoneData.zone.zoneCriteria?.creatureType?.aberration
                        ? 'checked' : '' }></input>
                    </div>
                    <div class="form-group">
                      <label>${ctBeast}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.creatureType.beast" type="checkbox" ${ zoneData.zone.zoneCriteria?.creatureType?.beast ? 'checked' : ''
                        }></input>
                    </div>
                    <div class="form-group">
                      <label>${ctCelest}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.creatureType.celestial" type="checkbox" ${ zoneData.zone.zoneCriteria?.creatureType?.celestial
                        ? 'checked' : '' }></input>
                    </div>
                    <div class="form-group">
                      <label>${ctConstruct}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.creatureType.construct" type="checkbox" ${ zoneData.zone.zoneCriteria?.creatureType?.construct
                        ? 'checked' : '' }></input>
                    </div>
                    <div class="form-group">
                      <label>${ctDragon}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.creatureType.dragon" type="checkbox" ${ zoneData.zone.zoneCriteria?.creatureType?.dragon ? 'checked'
                        : '' }></input>
                    </div>
                    <div class="form-group">
                      <label>${ctElemental}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.creatureType.elemental" type="checkbox" ${ zoneData.zone.zoneCriteria?.creatureType?.elemental
                        ? 'checked' : '' }></input>
                    </div>
                    <div class="form-group">
                      <label>${ctFey}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.creatureType.fey" type="checkbox" ${ zoneData.zone.zoneCriteria?.creatureType?.fey ? 'checked' : ''
                        }></input>
                    </div>
                    <div class="form-group">
                      <label>${ctFiend}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.creatureType.fiend" type="checkbox" ${ zoneData.zone.zoneCriteria?.creatureType?.fiend ? 'checked' : ''
                        }></input>
                    </div>
                    <div class="form-group">
                      <label>${ctGiant}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.creatureType.giant" type="checkbox" ${ zoneData.zone.zoneCriteria?.creatureType?.giant ? 'checked' : ''
                        }></input>
                    </div>
                    <div class="form-group">
                      <label>${ctHumanoid}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.creatureType.humanoid" type="checkbox" ${ zoneData.zone.zoneCriteria?.creatureType?.humanoid
                        ? 'checked' : '' }></input>
                    </div>
                    <div class="form-group">
                      <label>${ctMonst}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.creatureType.monstrosity" type="checkbox" ${ zoneData.zone.zoneCriteria?.creatureType?.monstrosity
                        ? 'checked' : '' }></input>
                    </div>
                    <div class="form-group">
                      <label>${ctOoze}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.creatureType.ooze" type="checkbox" ${ zoneData.zone.zoneCriteria?.creatureType?.ooze ? 'checked' : ''
                        }></input>
                    </div>
                    <div class="form-group">
                      <label>${ctPlant}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.creatureType.plant" type="checkbox" ${ zoneData.zone.zoneCriteria?.creatureType?.plant ? 'checked' : ''
                        }></input>
                    </div>
                    <div class="form-group">
                      <label>${ctUndead}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.creatureType.undead" type="checkbox" ${ zoneData.zone.zoneCriteria?.creatureType?.undead ? 'checked'
                        : '' }></input>
                    </div>
                  </div>
                  <div class="form-group bb1">
                    <label>${swarm}</label>
                    <input name="${AZ.flag.base}.zone.zoneCriteria.swarm" type="checkbox" ${ zoneData.zone.zoneCriteria?.swarm ? 'checked' : '' }></input>
                  </div>
                  <div class="bb1">
                    <p>${subRaceUse}</p>
                    <div class="form-group">
                      <label>${subRaceLabel}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.subTorRace" type="text" placeholder="${subRaceHint}" style="width: 200px;" value="${
                    zoneData.zone.zoneCriteria?.subTorRace ?? ''
                  }"></input>
                    </div>
                  </div>
                  <div class="bb1">
                    <p>${customUse}</p>
                    <div class="form-group">
                      <label>${customLabel}</label>
                      <input name="${AZ.flag.base}.zone.zoneCriteria.customTorBG" type="text" placeholder="${customHint}" style="width: 7em;" value="${
                    zoneData.zone.zoneCriteria?.customTorBG ?? ''
                  }"></input>
                    </div>
                  </div>
                  <div>
                    <p style="margin-top: 10px;"><span id="AZoverrides">${tagsTitle}</span><br><span style="padding-left: 5px; font-size: 0.9em;">${tagsText}</span></p>
                    <div>
                      <div class="form-group">
                        <label>${inclLabel}</label>
                        <input name="${AZ.flag.base}.zone.zoneCriteria.includeTag" type="text" placeholder="${inclHint}" style="width: 7em;" value="${
                    zoneData.zone.zoneCriteria?.includeTag ?? ''
                  }"></input>
                      </div>
                    </div>
                    <div>
                      <div class="form-group">
                        <label>${exclLabel}</label>
                        <input name="${AZ.flag.base}.zone.zoneCriteria.excludeTag" type="text" placeholder="${exclHint}" style="width: 7em;" value="${
                    zoneData.zone.zoneCriteria?.excludeTag ?? ''
                  }"></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="AZhidden">
                <label>Hidden azID</label>
                <input id="azID" name="${AZ.flag.base}.zone.azId" type="text" value="${zoneData.zone.azId}"></input>
                <label>Hidden Origin</label>
                <input name="${AZ.flag.base}.zone.origin.effectId" type="text" value="${zoneData.zone.origin.effectId}"></input>
              </div>
            </section>
          `;

      const nav = html.querySelector('nav.sheet-tabs');
      const tabHTML = stringToHTML(`<a class="item" data-tab="AuraZones" id="azTab"><i class="fas fa-sun"></i> ${tab_label}</a>`);
          
      /* widen the app */
      if (app.options.width < 650) app.setPosition({ width: 650 });
      /* Add the AZ tab link */
      nav.append(tabHTML);
      /* Add the AZ tab content under the Submit button */
      nav.parentNode.append(stringToHTML(contentString));

      
      if (zoneData.isAuraZone !== null) {
        /* LISTENERS */

        /* Define all the elements that need a listener */
          // const _isAuraZone = document.getElementById('isAuraZone');
        const _check3D = document.getElementById('check3D');
        const _shape = document.getElementById('AZselectShape');
        const _critAll = document.getElementById('critAll');
        const _typeUse = document.getElementById('typeUse');
        const _alignUse = document.getElementById('alignUse');
        const _dispUse = document.getElementById('dispUse');
        const _szUse = document.getElementById('szUse');
        const _ctUse = document.getElementById('ctUse');
        

          /* not currently used
          _isAuraZone.addEventListener('change', function () {
              const element = document.getElementById('bigDiv');
              if (this.checked) {
              CSS.show(element);
              // increase the window height

              } else { CSS.hide(element); };
          });
          */

        _check3D.addEventListener('change', function () {
          const element = document.getElementById('toggle3D');
          this.checked ? CSS.show(element) : CSS.hide(element);
        });

        _shape.addEventListener('input', function () {
          const element = document.getElementById('cylHeightLabel');
          if (this.value === 'sphere') {
            element.classList.replace('AZbright', 'AZdim');
          } else {
            element.classList.replace('AZdim', 'AZbright');
          }
        });

        _critAll.addEventListener('change', function () {
          const element = document.getElementById('toggleAllCrit');
          this.checked ? CSS.hide(element) : CSS.show(element);
        });

        _typeUse.addEventListener('change', function () {
          const element = document.getElementById('type');
          this.checked ? CSS.show(element) : CSS.hide(element);
        });

        _alignUse.addEventListener('change', function () {
          const element = document.getElementById('alignment');
          this.checked ? CSS.show(element) : CSS.hide(element);
        });

        _dispUse.addEventListener('change', function () {
          const element = document.getElementById('disposition');
          this.checked ? CSS.show(element) : CSS.hide(element);
        });

        _szUse.addEventListener('change', function () {
          const element = document.getElementById('size');
          this.checked ? CSS.show(element) : CSS.hide(element);
        });

        _ctUse.addEventListener('change', function () {
          const element = document.getElementById('creatureType');
          this.checked ? CSS.show(element) : CSS.hide(element);
        });
      } // end of iffy
    }); // end of Hooks.on()
    /* -------------------------------------------- */

  }; // end of activate()

} // end of class

