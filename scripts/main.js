import { BUILDER } from './builder.js';

/** Class representing root class of the module. */
class AZ {
  static ID = 'aurazones';

  static NAME = 'Aura Zones';

  static VNAME = 'panther';

  static DEBUG = '🅳ebug: ';
  static WARNING = '🆆arning: ';
  static ERROR = '🅴rror: ';
  static FN = 'ƒ';

  static SHOW = (elem) => {
    console.log('Show element:', elem);
    //console.log('Show element.style:', elem.style)
    //elem.style.display = 'block';
    elem.classList.replace('AZhidden', 'AZvisible');
  };

  static HIDE = (elem) => {
    console.log('Hide element:', elem);
    //console.log('Hide element.style:', elem.style)
    //elem.style.display = 'none';
    elem.classList.replace('AZvisible', 'AZhidden');
  };

  static FLAGS = {
    BASE: this.ID + '.' + this.VNAME,
    ZONES: this.ID + '.' + this.VNAME + '.zones',
  };

  static TEMPLATES = {
    TAB: `modules/${this.ID}/templates/aurazones.hbs`,
  };

  static log(force, ...args) {
    const shouldLog =
      force ||
      game.modules
        .get('_dev-mode')
        ?.api?.getPackageDebugValue(this.ID);

    if (shouldLog) {
      console.log(this.ID, '|', ...args);
    }
  }

  /**
   * utility function that returns a formatted name of the function at the specified index
   * can be useful for producing debug/error information
   * @param  {number} i integer index to locate the correct function name, defaults to 2, innerFunc is at -1, fName is >= 0
   * @param  {string} string2 defaults to '()', could be replaced with a parameter description
   * @param  {string} string1 defaults to 'ƒ'
   * @returns  {string} example:  (() => {return fName(3, '(tokenDoc)')})() returns 'ƒeval(tokenDoc)' when run from a macro
   */
  static fName(i = 2, string2 = '()', string1 = 'ƒ ') {
    function innerFunc(n = i + 1) {
      return new Error().stack.match(/at (\S+)/g)[n].slice(3);
    }
    return string1 + innerFunc() + string2;
  }

  /**
   * Given a scene,
   * retrieves a data object containing data on all zones
   * that exist on the scene, indiviual zones can be accessed by their id
   * @param  {Document} Scene a scene document
   * @return {object || null} data object containing all zones on scene keyed by zone id, if it exists
   */
  static getAllZones(sceneDoc = canvas.scene) {
    const allZones = duplicate(
      canvas.scene.data.flags?.[this.ID]?.[this.VNAME]?.zones
    );
    if (allZones) {
      return allZones;
    } else {
      this.log(
        true,
        this.WARNING,
        this.FN,
        'getAllZones() cannot find zones object'
      );
      return null;
    }
  }

  /**
   * Given a unique zone id,
   * retrieves complete data object regarding that zone
   * if it exists on the current scene
   * @param  {string} azId the unique identifier for the zone
   * @return {object || null} zone data object, if it exists
   */
  static getZone(azId) {
    let zoneData = this.getAllZones();
    if (zoneData === null) {
      this.log(
        true,
        this.ERROR,
        this.FN,
        'getZone()...cannot parse null, compiled zone data not present in scene flag'
      );
      return null;
    }
    if (zoneData?.[azId]) {
      return zoneData[azId];
    } else {
      this.log(
        true,
        this.ERROR,
        this.FN,
        `getZone()...zone ${azId} is missing from compiled zones data in scene flag`
      );
      return null;
    }
  }
}

/**
 * Register the module with Developmer Mode for debug
 * @param  {hook} devModeReady specifies the hook to attach the function to
 * @param  {function} anonymous wrapper to register the module debug info with Developer Mode module
 */
Hooks.once('devModeReady', ({ registerPackageDebugFlag }) => {
  registerPackageDebugFlag(AZ.ID);
});

class Source extends AZ {
  //super will reference AZ class ?????, this will reference source class

  static TOKEN(azId /*  */) {
    return canvas.scene.tokens.get(
      super.getZone(azId).origin.tokenId
    );
  }

  static POINT(azId /*  */) {}

  static ACTOR(azId /*  */) {}
}
