import symbols from './symbols.js';
import levels from './levels.js';
import { repeatedArray } from './../func/generators.js';
import exceptions from './../errorhandling/exceptions.js';

export default class LevelHelper {

  constructor() {
    this._nextLevelGenerator = repeatedArray(levels);
    this._currentLevel = this.nextLevel();    

    // -------------
    this.getCurrentLevel = this.getCurrentLevel.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
  }

  static getBlockTypeBySymbol(symbol = '') {
    for (const key in symbols) {
      if (symbols[key] === symbol) {
        return key;
      }
    }
    return '';
  }

  static positionIsWall(x, y, level) {
    if (!(LevelHelper.isValidLevel(level))) {
      throw new Error(exceptions['INVALID_LEVEL']);
    }
    if (!(LevelHelper.positionIsInLevelBounds(x, y, level))) {
      return false;
    }

    return ((LevelHelper.getBlockTypeBySymbol(level[y][x])) === 'wall');
  }

  static positionIsInLevelBounds(x, y, level) {
    if (!(LevelHelper.isValidLevel(level))) {
      throw new Error(exceptions['INVALID_LEVEL']);
    }
    return (y < level.length && x < level[0].length);
  }

  getCurrentLevel() {
    return this._currentLevel;
  }

  nextLevel() {
    let level = this._nextLevelGenerator.next().value;
    while(!(LevelHelper.isValidLevel(level))) {
      level = this._nextLevelGenerator.next().value;
    }
    this._currentLevel = level;
    return level;
  }

  static isValidLevel(level = []) {
    if (!(Array.isArray(level)) || !level.length) { return false; }

    let width = null;
    for (let y = 0; y < level.length; y++) {
      if (!(Array.isArray(level[y])) || !(level[y].length)) { return false; }
      if (!width) {
        width = level[y].length;
      } else {
        if (level[y].length !== width) { return false; }
      }
      for (let x = 0; x < level[y]; x++) {
        if (!(level[y][x] in symbols)) { return false; }
      }
    }
    return true;
  }

  static getLevelCenter(level) {
    if (!(LevelHelper.isValidLevel(level))) {
      throw new Error(exceptions['INVALID_LEVEL']);
    }

    return {
      y: level.length / 2,
      x: level[0].length / 2,
    }
  }

}
