import Position from '../../interfaces/Position.js';

export default class LogicObject {

  protected position: Position;

  constructor(initialPosition: Position) {
    this.position = initialPosition;
  }

  public getPosition(): Position {
    return this.position;
  }

}
