import symbols from './symbols.js';
import levels from './levels.js';
import exceptions from './../errorhandling/exceptions.js';
import Position from '../interfaces/Position.js';

export default class LevelHelper {

  private currentLevelIndex: number = -1;
  private currentLevel;

  public constructor() {
    this.currentLevel = this.nextLevel();
  }

  public static getBlockTypeBySymbol(symbol = ''): string {
    for (const key in symbols) {
      if (symbols[key] === symbol) {
        return key;
      }
    }
    return '';
  }

  public static positionIsWall(x, y, level): boolean {
    if (!(LevelHelper.isValidLevel(level))) {
      throw new Error(exceptions['INVALID_LEVEL']);
    }
    if (!(LevelHelper.positionIsInLevelBounds(x, y, level))) {
      return false;
    }

    return ((LevelHelper.getBlockTypeBySymbol(level[y][x])) === 'wall');
  }

  public static positionIsInLevelBounds(x, y, level): boolean {
    if (!(LevelHelper.isValidLevel(level))) {
      throw new Error(exceptions['INVALID_LEVEL']);
    }
    return (y < level.length && x < level[0].length);
  }

  public getCurrentLevel() {
    return this.currentLevel;
  }

  public getCurrentLevelIndex(): number {
    return this.currentLevelIndex;
  }

  public getTotalLevels(): number {
    return levels.length
  }

  public nextLevel() {
    this.currentLevelIndex = (this.currentLevelIndex + 1) % levels.length;
    const level = levels[this.currentLevelIndex];
    this.currentLevel = level;
    return level;
  }

  public static isValidLevel(level = []): boolean {
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

  public static getLevelCenter(level): Position {
    if (!(LevelHelper.isValidLevel(level))) {
      throw new Error(exceptions['INVALID_LEVEL']);
    }

    return {
      y: level.length / 2,
      x: level[0].length / 2,
    }
  }

}
