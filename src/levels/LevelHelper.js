import symbols from './symbols.js';

export default class LevelHelper {

  static getBlockTypeBySymbol(symbol = '') {
    for (const key in symbols) {
      if (symbols[key] === symbol) {
        return key;
      }
    }
    return '';
  }

}
