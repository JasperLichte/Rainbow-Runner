import Position from '../interfaces/Position.js';
import { encodeQueryData } from '../func/httpFuncs.js';
import Config from '../globals/Config.js';

export default class LevelHelper {

  public static readonly SERVER_PATH
    = Config.get('ABS_ROOT_DIR') + 'server/levels/xmlLevelRequests.php?';
  private currentLevelIndex: number = 0;
  private currentLevel;

  public constructor() {
    this.currentLevel = this.nextLevel();
  }

  public static getBlockTypeBySymbol(symbol = ''): string {
    const symbols = Config.get('RENDER_SYMBOLS');
    for (const key in symbols) {
      if (symbols[key] === symbol) {
        return key;
      }
    }
    return '';
  }

  public static positionIsWall(x, y, level): boolean {
    if (!(LevelHelper.positionIsInLevelBounds(x, y, level))) {
      return false;
    }

    return ((LevelHelper.getBlockTypeBySymbol(level[y][x])) === 'wall');
  }

  public static positionIsInLevelBounds(x, y, level): boolean {
    return (y < level.length && x < level[0].length);
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

  public async nextLevel() {
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
      'f': 'getNextLevel',
      'params': JSON.stringify([index]),
    }));
    return await res.json();  
  }

}
