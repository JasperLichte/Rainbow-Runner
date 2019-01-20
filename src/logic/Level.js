import exceptions from './../errorhandling/exceptions.js';
import LevelHelper from './../levels/LevelHelper.js';

export default class Level {
  
  constructor(level = []) {
    if (!(Array.isArray(level)) || !level.length) {
      throw new Error(exceptions['INVALID_LEVEL']);
    }
    this._levelArray = level;

    // ---------------
    this.newPositionIsAWall = this.newPositionIsAWall.bind(this);
  }

  newPositionIsAWall(x, y) {
    const blockSize = 1;

    let newX = x - (blockSize / 2);
    let newY = y;
    let arrayX = Math.round(parseFloat(newX));
    let arrayY = Math.abs(Math.round(parseFloat(newY)));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray)) {return true};

    newX = x + (blockSize / 2);
    newY = y;
    arrayX = Math.round(parseFloat(newX));
    arrayY = Math.abs(Math.round(parseFloat(newY)));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray)) {return true};

    newX = x;
    newY = y - (blockSize / 2);
    arrayX = Math.round(parseFloat(newX));
    arrayY = Math.abs(Math.round(parseFloat(newY)));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray)) {return true};

    newX = x;
    newY = y + (blockSize / 2);
    arrayX = Math.round(parseFloat(newX));
    arrayY = Math.abs(Math.round(parseFloat(newY)));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray)) {return true};

    newX = x - (blockSize / 2);
    newY = y - (blockSize / 2);
    arrayX = Math.round(parseFloat(newX));
    arrayY = Math.abs(Math.round(parseFloat(newY)));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray)) {return true};

    newX = x + (blockSize / 2);
    newY = y - (blockSize / 2);
    arrayX = Math.round(parseFloat(newX));
    arrayY = Math.abs(Math.round(parseFloat(newY)));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray)) {return true};

    newX = x + (blockSize / 2);
    newY = y + (blockSize / 2);
    arrayX = Math.round(parseFloat(newX));
    arrayY = Math.abs(Math.round(parseFloat(newY)));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray)) {return true};

    newX = x - (blockSize / 2);
    newY = y + (blockSize / 2);
    arrayX = Math.round(parseFloat(newX));
    arrayY = Math.abs(Math.round(parseFloat(newY)));
    return LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray);
  }

}
