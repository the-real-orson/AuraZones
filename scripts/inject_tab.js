import { AZ } from './az.js';
import { BUILDER } from './builder.js';

/**
 * Aura Zone configuration for ActiveEffect sheet
 * @param  {string} renderActiveEffectConfig the name of the hook
 * @param  {function} anonymous contains the html and methods for the sheet tab
 * @returns {string} the hook ID
 */
Hooks.on('renderActiveEffectConfig', (sheet, html) => {
  AZ.log(true, 'sheet:', sheet);
  const zoneData =
    sheet.object.data.flags?.[AZ.ID]?.[AZ.VNAME] ??
    BUILDER.effect(sheet);

  const is_aura_zone = game.i18n.format('AZCONFIG.is-aura-zone'); // "Active Effect is an Aura Zone"

  const radius_Label = game.i18n.format('AZCONFIG.radius.Label');

  const point_padding = game.i18n.format('AZCONFIG.point-padding');

  const check3D = game.i18n.format('AZCONFIG.check-3D.Use');
  const shape = game.i18n.format('AZCONFIG.check-3D.shape');
  const sphere = game.i18n.format('AZCONFIG.check-3D.Sphere');
  const cylinder = game.i18n.format('AZCONFIG.check-3D.Cylinder');
  const cylHeightLabel = game.i18n.format(
    'AZCONFIG.check-3D.CylinderHeight.Label'
  );

  const offsetPre = game.i18n.format('AZCONFIG.check-3D.Offset.Pre');
  const offsetSphere = game.i18n.format(
    'AZCONFIG.check-3D.Offset.Sphere'
  );
  const offsetCyl = game.i18n.format(
    'AZCONFIG.check-3D.Offset.Cylinder'
  );
  const offsetHint = game.i18n.format(
    'AZCONFIG.check-3D.Offset.Hint'
  );

  const forceDisplay = game.i18n.format(
    'AZCONFIG.display-on-recipient'
  );

  const excludeSource = game.i18n.format('AZCONFIG.exclude-source');

  const cloneEffect = game.i18n.format('AZCONFIG.clone');

  const critAll = game.i18n.format('AZCONFIG.criteria.All');

  const typeUse = game.i18n.format('AZCONFIG.criteria.ActorType.Use');
  const typeNPC = game.i18n.format('AZCONFIG.criteria.ActorType.NPC');
  const typePC = game.i18n.format('AZCONFIG.criteria.ActorType.PC');
  const typeVehicle = game.i18n.format(
    'AZCONFIG.criteria.ActorType.Vehicle'
  );

  const alignUse = game.i18n.format(
    'AZCONFIG.criteria.Alignment.Use'
  );
  const alignLG = game.i18n.format('AZCONFIG.criteria.Alignment.LG');
  const alignNG = game.i18n.format('AZCONFIG.criteria.Alignment.NG');
  const alignCG = game.i18n.format('AZCONFIG.criteria.Alignment.CG');
  const alignLN = game.i18n.format('AZCONFIG.criteria.Alignment.LN');
  const alignNN = game.i18n.format('AZCONFIG.criteria.Alignment.NN');
  const alignCN = game.i18n.format('AZCONFIG.criteria.Alignment.CN');
  const alignLE = game.i18n.format('AZCONFIG.criteria.Alignment.LE');
  const alignNE = game.i18n.format('AZCONFIG.criteria.Alignment.NE');
  const alignCE = game.i18n.format('AZCONFIG.criteria.Alignment.CE');

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
  const ctBeast = game.i18n.format('AZCONFIG.criteria.Type.Beast');
  const ctCelest = game.i18n.format(
    'AZCONFIG.criteria.Type.Celestial'
  );
  const ctConstruct = game.i18n.format(
    'AZCONFIG.criteria.Type.Construct'
  );
  const ctDragon = game.i18n.format('AZCONFIG.criteria.Type.Dragon');
  const ctElemental = game.i18n.format(
    'AZCONFIG.criteria.Type.Elemental'
  );
  const ctFey = game.i18n.format('AZCONFIG.criteria.Type.Fey');
  const ctFiend = game.i18n.format('AZCONFIG.criteria.Type.Fiend');
  const ctGiant = game.i18n.format('AZCONFIG.criteria.Type.Giant');
  const ctHumanoid = game.i18n.format(
    'AZCONFIG.criteria.Type.Humanoid'
  );
  const ctMonst = game.i18n.format(
    'AZCONFIG.criteria.Type.Monstrosity'
  );
  const ctOoze = game.i18n.format('AZCONFIG.criteria.Type.Ooze');
  const ctPlant = game.i18n.format('AZCONFIG.criteria.Type.Plant');
  const ctUndead = game.i18n.format('AZCONFIG.criteria.Type.Undead');

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

  const inclLabel = game.i18n.format(
    'AZCONFIG.criteria.IncludeTag.Label'
  );
  const inclHint = game.i18n.format(
    'AZCONFIG.criteria.IncludeTag.Hint'
  );

  const tagsTitle = game.i18n.format(
    'AZCONFIG.criteria.Override.Title'
  );
  const tagsText = game.i18n.format(
    'AZCONFIG.criteria.Override.Text'
  );
  const exclLabel = game.i18n.format(
    'AZCONFIG.criteria.ExcludeTag.Label'
  );
  const exclHint = game.i18n.format(
    'AZCONFIG.criteria.ExcludeTag.Hint'
  );

  const appliedEffectContents = `
          <section class="tab" data-tab="AuraZones">
              <h3> You cannot alter this az-applied effect </h3>
          </section>`;

  const mainContents = `
          <section class="tab" data-tab="AuraZones">
              <div class="form-group bb1">
                  <label>${is_aura_zone}</label>
                  <input id="isAuraZone" name="flags.${
                    AZ.FLAGS.BASE
                  }.isAuraZone" type="checkbox" ${
    zoneData?.isAuraZone ? 'checked' : ''
  }></input>
              </div>
              <div id="bigDiv" class="${
                zoneData?.isAuraZone ? 'AZvisible' : 'AZhidden'
              }">
                  <div class="form-group" style="display: block;">
                      <label>${radius_Label}</label>
                      <input class="numberIn" name="flags.${
                        AZ.FLAGS.BASE
                      }.zone.radius" type="number" min="0" step="any" value="${
    zoneData.zone?.radius
  }"></input>
                  </div>
                  <div class="form-group">
                      <label>${point_padding}</label>
                      <input name="flags.${
                        AZ.FLAGS.BASE
                      }.zone.pointPadding" type="checkbox" ${
    zoneData.zone?.pointPadding ? 'checked' : ''
  }></input>
                  </div>
                  <div class="form-group">
                      <label>${check3D}</label>
                      <input id="check3D" name="flags.${
                        AZ.FLAGS.BASE
                      }.zone.check3D.bool" type="checkbox" ${
    zoneData.zone?.check3D?.bool ? 'checked' : ''
  }></input>
                  </div>
                  <div id="toggle3D" class="${
                    zoneData?.zone.check3D.bool
                      ? 'AZvisible'
                      : 'AZhidden'
                  }">
                      <div id="cylsphere" class="form-group">
                          <label for="shape">${shape}</label>
                          <select id="AZselectShape" class="${
                            zoneData.zone.check3D?.shape === 'sphere'
                              ? 'color2'
                              : 'color1'
                          }" name="flags.${
    AZ.FLAGS.BASE
  }.zone.check3D.shape"></input>
                              <option value="sphere" ${
                                zoneData.zone.check3D?.shape ===
                                'sphere'
                                  ? 'selected'
                                  : ''
                              }>${sphere}</option>
                              <option value="cylinder" ${
                                zoneData.zone.check3D?.shape ===
                                'cylinder'
                                  ? 'selected'
                                  : ''
                              }>${cylinder}</option>
                          </select>
                      </div>
                      <div class="form-group" id="cylHeight">
                          <label id="cylHeightLabel" class="${
                            zoneData.zone.check3D?.shape === 'sphere'
                              ? 'AZdim'
                              : 'AZbright'
                          }">${cylHeightLabel}</label>
                          <input class="numberIn" name="flags.${
                            AZ.FLAGS.BASE
                          }.zone.check3D.cylHeight" type="number" min="0" step="any" value="${
    zoneData.zone.check3D?.cylinderHeigt
  }"></input>
                      </div>
                      <div class="form-group" id="offSet">
                          <label>${offsetPre}<span id="offsetLabel" class="${
    zoneData.zone.check3D?.shape === 'sphere' ? 'color2' : 'color1'
  }">${
    zoneData.zone.check3D?.shape === 'sphere'
      ? offsetSphere
      : offsetCyl
  }</span></label>
                          <input class="numberIn" name="flags.${
                            AZ.FLAGS.BASE
                          }.zone.check3D.offSet" type="number" step="any" value="${
    zoneData.zone.check3D?.offSet
  }"></input>
                      </div>
                  </div>
                  <div class="form-group">
                      <label>${forceDisplay}</label>
                      <input name="flags.${
                        AZ.FLAGS.BASE
                      }.zone.displayApplied" type="checkbox" ${
    zoneData.zone?.displayApplied ? 'checked' : ''
  }></input>
                  </div>
                  <div class="form-group">
                      <label>${excludeSource}</label>
                      <input name="flags.${
                        AZ.FLAGS.BASE
                      }.zone.excludeSource" type="checkbox" ${
    zoneData.zone?.excludeSource ? 'checked' : ''
  }></input>
                  </div>
                  <div class="form-group">
                      <label>${cloneEffect}</label>
                      <input name="flags.${
                        AZ.FLAGS.BASE
                      }.zone.cloneOnSource" type="checkbox" ${
    zoneData.zone?.cloneOnSource ? 'checked' : ''
  }></input>
                  </div>
                  <div class="form-group">
                      <label>${critAll}</label>
                      <input id="critAll" name="flags.${
                        AZ.FLAGS.BASE
                      }.zone.zoneCriteria.bool" type="checkbox" ${
    zoneData.zone.zoneCriteria?.bool ? 'checked' : ''
  }></input>
                  </div>
                  <div id="toggleAllCrit" class="${
                    zoneData.zone.zoneCriteria?.bool
                      ? 'AZhidden'
                      : 'AZvisible'
                  }">
                      <div class="form-group">
                          <label>${typeUse}</label>
                          <input id="typeUse" name="flags.${
                            AZ.FLAGS.BASE
                          }.zone.zoneCriteria.actorType.bool" type="checkbox" ${
    zoneData.zone.zoneCriteria?.actorType?.bool ? 'checked' : ''
  }></input>
                      </div>
                      <div id="type" class="groovy ${
                        zoneData.zone.zoneCriteria?.actorType?.bool
                          ? 'AZvisible'
                          : 'AZhidden'
                      }">
                          <div class="form-group">
                              <label>${typePC}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.actorType.pc" type="checkbox" ${
    zoneData.zone.zoneCriteria?.actorType?.pc ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${typeNPC}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.actorType.npc" type="checkbox" ${
    zoneData.zone.zoneCriteria?.actorType?.npc ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${typeVehicle}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.actorType.vehicle" type="checkbox" ${
    zoneData.zone.zoneCriteria?.actorType?.vehicle ? 'checked' : ''
  }></input>
                          </div>
                      </div>
                      <div class="form-group">
                          <label>${alignUse}</label>
                          <input id="alignUse" name="flags.${
                            AZ.FLAGS.BASE
                          }.zone.zoneCriteria.alignment.bool" type="checkbox" ${
    zoneData.zone.zoneCriteria?.alignment?.bool ? 'checked' : ''
  }></input>
                      </div>
                      <div id="alignment" class="groovy ${
                        zoneData.zone.zoneCriteria?.alignment?.bool
                          ? 'AZvisible'
                          : 'AZhidden'
                      }">
                          <div class="form-group tar">
                              <label>${alignLG}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.alignment.lg" type="checkbox" ${
    zoneData.zone.zoneCriteria?.alignment?.lg ? 'checked' : ''
  }></input>
                          
                              <label>${alignNG}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.alignment.ng" type="checkbox" ${
    zoneData.zone.zoneCriteria?.alignment?.ng ? 'checked' : ''
  }></input>
                          
                              <label>${alignCG}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.alignment.cg" type="checkbox" ${
    zoneData.zone.zoneCriteria?.alignment?.cg ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group tar">
                              <label>${alignLN}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.alignment.ln" type="checkbox" ${
    zoneData.zone.zoneCriteria?.alignment?.ln ? 'checked' : ''
  }></input>
                       
                              <label>${alignNN}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.alignment.nn" type="checkbox" ${
    zoneData.zone.zoneCriteria?.alignment?.nn ? 'checked' : ''
  }></input>
                        
                              <label>${alignCN}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.alignment.cn" type="checkbox" ${
    zoneData.zone.zoneCriteria?.alignment?.cn ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group tar">
                              <label>${alignLE}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.alignment.le" type="checkbox" ${
    zoneData.zone.zoneCriteria?.alignment?.le ? 'checked' : ''
  }></input>
          
                              <label>${alignNE}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.alignment.ne" type="checkbox" ${
    zoneData.zone.zoneCriteria?.alignment?.ne ? 'checked' : ''
  }></input>
                         
                              <label>${alignCE}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.alignment.ce" type="checkbox" ${
    zoneData.zone.zoneCriteria?.alignment?.ce ? 'checked' : ''
  }></input>
                          </div>
                      </div>
                      <div class="form-group">
                          <label>${dispUse}</label>
                          <input id="dispUse" name="flags.${
                            AZ.FLAGS.BASE
                          }.zone.zoneCriteria.disposition.bool" type="checkbox" ${
    zoneData.zone.zoneCriteria?.disposition?.bool ? 'checked' : ''
  }></input>
                      </div>
                      <div id="disposition" class="groovy ${
                        zoneData.zone.zoneCriteria?.disposition?.bool
                          ? 'AZvisible'
                          : 'AZhidden'
                      }">
                          <div class="form-group">
                              <label>${dispF}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.disposition.friendly" type="checkbox" ${
    zoneData.zone.zoneCriteria?.disposition?.friendly ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${dispN}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.disposition.neutral" type="checkbox" ${
    zoneData.zone.zoneCriteria?.disposition?.neutral ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${dispH}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.disposition.hostile" type="checkbox" ${
    zoneData.zone.zoneCriteria?.disposition?.hostile ? 'checked' : ''
  }></input>
                          </div>
                      </div>
                      <div class="form-group">
                          <label>${szUse}</label>
                          <input id="szUse" name="flags.${
                            AZ.FLAGS.BASE
                          }.zone.zoneCriteria.size.bool" type="checkbox" ${
    zoneData.zone.zoneCriteria?.size?.bool ? 'checked' : ''
  }></input>
                      </div>
                      <div id="size" class="groovy ${
                        zoneData.zone.zoneCriteria?.size?.bool
                          ? 'AZvisible'
                          : 'AZhidden'
                      }">
                          <div class="form-group">
                              <label>${szTiny}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.size.tiny" type="checkbox" ${
    zoneData.zone.zoneCriteria?.size?.tiny ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${szSm}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.size.sm" type="checkbox" ${
    zoneData.zone.zoneCriteria?.size?.sm ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${szMed}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.size.med" type="checkbox" ${
    zoneData.zone.zoneCriteria?.size?.med ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${szLg}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.size.large" type="checkbox" ${
    zoneData.zone.zoneCriteria?.size?.large ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${szHuge}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.size.huge" type="checkbox" ${
    zoneData.zone.zoneCriteria?.size?.huge ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${szGrg}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.size.grg" type="checkbox" ${
    zoneData.zone.zoneCriteria?.size?.grg ? 'checked' : ''
  }></input>
                          </div>
                      </div>
                      <div class="form-group">
                          <label>${ctUse}</label>
                          <input id="ctUse" name="flags.${
                            AZ.FLAGS.BASE
                          }.zone.zoneCriteria.creatureType.bool" type="checkbox" ${
    zoneData.zone.zoneCriteria?.creatureType?.bool ? 'checked' : ''
  }></input>
                      </div>
                      <div id="creatureType" class="groovy ${
                        zoneData.zone.zoneCriteria?.creatureType?.bool
                          ? 'AZvisible'
                          : 'AZhidden'
                      }">
                          <div class="form-group">
                              <label>${ctAber}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.creatureType.aberration" type="checkbox" ${
    zoneData.zone.zoneCriteria?.creatureType?.aberration
      ? 'checked'
      : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${ctBeast}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.creatureType.beast" type="checkbox" ${
    zoneData.zone.zoneCriteria?.creatureType?.beast ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${ctCelest}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.creatureType.celestial" type="checkbox" ${
    zoneData.zone.zoneCriteria?.creatureType?.celestial
      ? 'checked'
      : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${ctConstruct}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.creatureType.construct" type="checkbox" ${
    zoneData.zone.zoneCriteria?.creatureType?.construct
      ? 'checked'
      : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${ctDragon}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.creatureType.dragon" type="checkbox" ${
    zoneData.zone.zoneCriteria?.creatureType?.dragon ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group">
                          <label>${ctElemental}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.creatureType.elemental" type="checkbox" ${
    zoneData.zone.zoneCriteria?.creatureType?.elemental
      ? 'checked'
      : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${ctFey}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.creatureType.fey" type="checkbox" ${
    zoneData.zone.zoneCriteria?.creatureType?.fey ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${ctFiend}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.creatureType.fiend" type="checkbox" ${
    zoneData.zone.zoneCriteria?.creatureType?.fiend ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${ctGiant}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.creatureType.giant" type="checkbox" ${
    zoneData.zone.zoneCriteria?.creatureType?.giant ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${ctHumanoid}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.creatureType.humanoid" type="checkbox" ${
    zoneData.zone.zoneCriteria?.creatureType?.humanoid
      ? 'checked'
      : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${ctMonst}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.creatureType.monstrosity" type="checkbox" ${
    zoneData.zone.zoneCriteria?.creatureType?.monstrosity
      ? 'checked'
      : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${ctOoze}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.creatureType.ooze" type="checkbox" ${
    zoneData.zone.zoneCriteria?.creatureType?.ooze ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${ctPlant}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.creatureType.plant" type="checkbox" ${
    zoneData.zone.zoneCriteria?.creatureType?.plant ? 'checked' : ''
  }></input>
                          </div>
                          <div class="form-group">
                              <label>${ctUndead}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.creatureType.undead" type="checkbox" ${
    zoneData.zone.zoneCriteria?.creatureType?.undead ? 'checked' : ''
  }></input>
                          </div>
                      </div>
                      <div class="form-group bb1">
                          <label>${swarm}</label>
                          <input name="flags.${
                            AZ.FLAGS.BASE
                          }.zone.zoneCriteria.swarm" type="checkbox" ${
    zoneData.zone.zoneCriteria?.swarm ? 'checked' : ''
  }></input>
                      </div>
                      <div class="bb1">
                          <p>${subRaceUse}</p>
                          <div class="form-group">
                              <label>${subRaceLabel}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.subTorRace" type="text" placeholder="${subRaceHint}" style="width: 200px;" value="${
    zoneData.zone.zoneCriteria?.subTorRace ?? ''
  }"></input>
                          </div>
                      </div>
                      <div class="bb1">
                          <p>${customUse}</p>
                          <div class="form-group">
                              <label>${customLabel}</label>
                              <input name="flags.${
                                AZ.FLAGS.BASE
                              }.zone.zoneCriteria.customORbg" type="text" placeholder="${customHint}" style="width: 7em;" value="${
    zoneData.zone.zoneCriteria?.customORbg ?? ''
  }"></input>
                          </div>
                      </div>
                      <div>
                          <p style="margin-top: 10px;"><span id="AZoverrides">${tagsTitle}</span><br><span style="padding-left: 5px; font-size: 0.9em;">${tagsText}</span></p>
                          <div>
                              <div class="form-group">
                                  <label>${inclLabel}</label>
                                  <input name="flags.${
                                    AZ.FLAGS.BASE
                                  }.zone.zoneCriteria.includeTag" type="text" placeholder="${inclHint}" style="width: 7em;" value="${
    zoneData.zone.zoneCriteria?.includeTag ?? ''
  }"></input>
                              </div>
                          </div>
                          <div>
                              <div class="form-group">
                                  <label>${exclLabel}</label>
                                  <input name="flags.${
                                    AZ.FLAGS.BASE
                                  }.zone.zoneCriteria.excludeTag" type="text" placeholder="${exclHint}" style="width: 7em;" value="${
    zoneData.zone.zoneCriteria?.excludeTag ?? ''
  }"></input>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>`;

  const tab = `<a class="item" data-tab="AuraZones"><i class="fas fa-cogs"></i> Aura</a>`;

  // begin injection
  const nav = html.find('nav.sheet-tabs'); // still have this bit of jQuery
  // Add the AZ tab button:
  nav.append(tab);
  // Add the AZ tab content:
  if (zoneData?.isAuraZone === null) {
    html.find('section.tab').last().after(appliedEffectContents);
  } else {
    html.find('section.tab').last().after(mainContents);
  }
  //widen the sheet
  // TODO: only want to widen the sheet if it is core/system, not already widened
  sheet.setPosition({ width: sheet.options.width + 100 });

  // Define all the elements that need a listener
  const _isAuraZone = document.getElementById('isAuraZone');
  AZ.log(false, '_isAuraZone:', _isAuraZone);
  const _check3D = document.getElementById('check3D');
  AZ.log(false, '_check3D:', _check3D);
  const _shape = document.getElementById('AZselectShape');
  AZ.log(false, '_shape:', _shape);
  const _critAll = document.getElementById('critAll');
  AZ.log(false, '_critAll:', _critAll);
  const _typeUse = document.getElementById('typeUse');
  AZ.log(false, '_typeUse:', _typeUse);
  const _alignUse = document.getElementById('alignUse');
  AZ.log(false, '_alignUse:', _alignUse);
  const _dispUse = document.getElementById('dispUse');
  AZ.log(false, '_dispUse:', _dispUse);
  const _szUse = document.getElementById('szUse');
  AZ.log(false, '_szUse:', _szUse);
  const _ctUse = document.getElementById('ctUse');
  AZ.log(false, '_ctUse:', _ctUse);

  _isAuraZone.addEventListener('change', function () {
    const element = document.getElementById('bigDiv');
    AZ.log(false, '#bigDiv:', element);
    this.checked ? AZ.SHOW(element) : AZ.HIDE(element);
    // html.css({ height: "auto" }); // this is needed to resize the window
    //html.style.height = 'auto';
  });

  _check3D.addEventListener('change', function () {
    const element = document.getElementById('toggle3D');
    AZ.log(false, '#toggle3D:', element);
    this.checked ? AZ.SHOW(element) : AZ.HIDE(element);
    //html.css({ height: "auto" });
  });

  // toggle id="cylHeight", make visible if check3D.shape false/unchecked
  _shape.addEventListener('input', function () {
    const element = document.getElementById('cylHeightLabel');
    const element2 = document.getElementById('offsetLabel');
    const element3 = document.getElementById('AZselectShape'); // same as this?
    AZ.log(false, '#cylHeight:', element);
    if (this.value === 'sphere') {
      element.classList.replace('AZbright', 'AZdim');
      element2.innerHTML = offsetSphere;
      element2.classList.replace('color1', 'color2');
      element3.classList.replace('color1', 'color2');
    } else {
      element.classList.replace('AZdim', 'AZbright');
      element2.innerHTML = offsetCyl;
      element2.classList.replace('color2', 'color1');
      element3.classList.replace('color2', 'color1');
    }
    //html.css({ height: "auto" });
  });

  _critAll.addEventListener('change', function () {
    const element = document.getElementById('toggleAllCrit');
    AZ.log(false, '#toggleAllCrit:', this.unchecked);
    this.checked ? AZ.HIDE(element) : AZ.SHOW(element);
    //html.css({ height: "auto" });
  });

  _typeUse.addEventListener('change', function () {
    const element = document.getElementById('type');
    AZ.log(false, '#type:', element);
    this.checked ? AZ.SHOW(element) : AZ.HIDE(element);
    //html.css({ height: "auto" });
  });

  _alignUse.addEventListener('change', function () {
    const element = document.getElementById('alignment');
    AZ.log(false, '#alignment:', element);
    this.checked ? AZ.SHOW(element) : AZ.HIDE(element);
    //html.css({ height: "auto" });
  });

  _dispUse.addEventListener('change', function () {
    const element = document.getElementById('disposition');
    AZ.log(false, '#disposition:', element);
    this.checked ? AZ.SHOW(element) : AZ.HIDE(element);
    //html.css({ height: "auto" });
  });

  _szUse.addEventListener('change', function () {
    const element = document.getElementById('size');
    AZ.log(false, '#size:', element);
    this.checked ? AZ.SHOW(element) : AZ.HIDE(element);
    //html.css({ height: "auto" });
  });

  _ctUse.addEventListener('change', function () {
    const element = document.getElementById('creatureType');
    AZ.log(false, '#creatureType:', element);
    this.checked ? AZ.SHOW(element) : AZ.HIDE(element);
    //html.css({ height: "auto" });
  });
});
