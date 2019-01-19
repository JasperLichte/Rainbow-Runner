import symbols from './symbols.js';
import levels from './levels.js';
import { repeatedArray } from './../func/generators.js';

export default class LevelHelper {

  constructor() {
    this._nextLevelGenerator = repeatedArray(levels);
    this._currentLevel = this.getNextLevel();

    // -------------
    this.getCurrentLevel = this.getCurrentLevel.bind(this);
    this.getNextLevel = this.getNextLevel.bind(this);
  }

  static getBlockTypeBySymbol(symbol = '') {
    for (const key in symbols) {
      if (symbols[key] === symbol) {
        return key;
      }
    }
    return '';
  }

  getCurrentLevel() {
    return this._currentLevel;
  }

  getNextLevel() {
    const level = this._nextLevelGenerator.next().value;
    this._currentLevel = level;
    return level;
  }

}
