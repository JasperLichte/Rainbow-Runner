import LevelHelper from './../levels/LevelHelper.js';
import Position from '../interfaces/Position.js';

export default class Level {

  private levelArray = [];
  
  constructor(level: string[][] = []) {
    this.levelArray = level;
  }

  newPositionIsAWall(position: Position): boolean {
    const { x, y } = position;
    const blockSize = 1;

    let newX = x - (blockSize / 2);
    let newY = y;
    let arrayX = Math.round(newX);
    let arrayY = Math.abs(Math.round(newY));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this.levelArray)) return true;

    newX = x + (blockSize / 2);
    newY = y;
    arrayX = Math.round(newX);
    arrayY = Math.abs(Math.round(newY));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this.levelArray)) return true;

    newX = x;
    newY = y - (blockSize / 2);
    arrayX = Math.round(newX);
    arrayY = Math.abs(Math.round(newY));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this.levelArray)) return true;

    newX = x;
    newY = y + (blockSize / 2);
    arrayX = Math.round(newX);
    arrayY = Math.abs(Math.round(newY));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this.levelArray)) return true;

    newX = x - (blockSize / 2);
    newY = y - (blockSize / 2);
    arrayX = Math.round(newX);
    arrayY = Math.abs(Math.round(newY));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this.levelArray)) return true;

    newX = x + (blockSize / 2);
    newY = y - (blockSize / 2);
    arrayX = Math.round(newX);
    arrayY = Math.abs(Math.round(newY));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this.levelArray)) return true;

    newX = x + (blockSize / 2);
    newY = y + (blockSize / 2);
    arrayX = Math.round(newX);
    arrayY = Math.abs(Math.round(newY));
    if (LevelHelper.positionIsWall(arrayX, arrayY, this.levelArray)) return true;

    newX = x - (blockSize / 2);
    newY = y + (blockSize / 2);
    arrayX = Math.round(newX);
    arrayY = Math.abs(Math.round(newY));
    return LevelHelper.positionIsWall(arrayX, arrayY, this.levelArray);
  }

}
