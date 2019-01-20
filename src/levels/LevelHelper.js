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
    if (!(Array.isArray(level)) || !level.length) {
      throw new Error(exceptions['INVALID_LEVEL']);
    }
    if (!(LevelHelper.positionIsInLevelBounds(x, y, level))) {
      return false;
    }

    return ((LevelHelper.getBlockTypeBySymbol(level[y][x])) === 'wall');
  }

  static positionIsInLevelBounds(x, y, level) {
    if (!(Array.isArray(level)) || !level.length) {
      throw new Error(exceptions['INVALID_LEVEL']);
    }
    return (y < level.length && x < level[0].length);
  }

  getCurrentLevel() {
    return this._currentLevel;
  }

  nextLevel() {
    const level = this._nextLevelGenerator.next().value;
    this._currentLevel = level;
    return level;
  }

}
