import Position from '../interfaces/Position.js';
import { encodeQueryData } from '../func/httpFuncs.js';
import Config from '../config/Config.js';

export default class LevelHelper {

  private static readonly SERVER_PATH = Config.get('ABS_ROOT_DIR') + 'server/levels/xmlLevelRequests.php?';
  private currentLevelIndex: number = 0;
  private currentLevel;

  public constructor() {
    (async () => { 
      this.currentLevel = await this.getLevel();
    })();
  }

  public static getSymbols() {
    return Config.get('RENDER_SYMBOLS');
  }

  public static getBlockTypes(): string[] {
    return Object.keys(LevelHelper.getSymbols());
  }

  public static getBlockTypeBySymbol(symbol = ''): string {
    const symbols = LevelHelper.getSymbols();
    for (const key in symbols) {
      if (symbols[key] === symbol) {
        return key;
      }
    }
    return '';
  }

  public getCurrentLevel() {
    return this.currentLevel;
  }

  public getCurrentLevelIndex(): number {
    return this.currentLevelIndex;
  }

  public static async getTotalLevels() {
    const res = await fetch(LevelHelper.SERVER_PATH + encodeQueryData({
      'f': 'getTotalLevels',
    }));
    return await res.json();
  }

  public async getLevel() {
    const level = await LevelHelper.loadLevel(this.currentLevelIndex);
    this.currentLevel = level;
    this.currentLevelIndex++;
    return level;
  }

  public static getLevelCenter(level): Position {
    return {
      y: level.length / 2,
      x: level[0].length / 2,
    }
  }

  private static async loadLevel(index: number) {
    const res = await fetch(LevelHelper.SERVER_PATH + encodeQueryData({
      'f': 'getLevel',
      'params': JSON.stringify([index]),
    }));
    return await res.json();  
  }

}
