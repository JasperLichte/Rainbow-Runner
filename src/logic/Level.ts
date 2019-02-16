import exceptions from './../errorhandling/exceptions.js';
import LevelHelper from './../levels/LevelHelper.js';

export default class Level {

  private _levelArray = [];
  
  constructor(level = []) {
    if (!(LevelHelper.isValidLevel(level))) {
      throw new Error(exceptions['INVALID_LEVEL']);
    }
    this._levelArray = level;
  }

  newPositionIsAWall(x: number, y: number) {
    const blockSize = 1;

    let newX = x - (blockSize / 2);
    let newY = y;
    let arrayX = Math.round(newX);
    let arrayY = Math.abs(Math.round(newY));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray)) return true;

    newX = x + (blockSize / 2);
    newY = y;
    arrayX = Math.round(newX);
    arrayY = Math.abs(Math.round(newY));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray)) return true;

    newX = x;
    newY = y - (blockSize / 2);
    arrayX = Math.round(newX);
    arrayY = Math.abs(Math.round(newY));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray)) return true;

    newX = x;
    newY = y + (blockSize / 2);
    arrayX = Math.round(newX);
    arrayY = Math.abs(Math.round(newY));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray)) return true;

    newX = x - (blockSize / 2);
    newY = y - (blockSize / 2);
    arrayX = Math.round(newX);
    arrayY = Math.abs(Math.round(newY));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray)) return true;

    newX = x + (blockSize / 2);
    newY = y - (blockSize / 2);
    arrayX = Math.round(newX);
    arrayY = Math.abs(Math.round(newY));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray)) return true;

    newX = x + (blockSize / 2);
    newY = y + (blockSize / 2);
    arrayX = Math.round(newX);
    arrayY = Math.abs(Math.round(newY));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray)) return true;

    newX = x - (blockSize / 2);
    newY = y + (blockSize / 2);
    arrayX = Math.round(newX);
    arrayY = Math.abs(Math.round(newY));
    return LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray);
  }

}
