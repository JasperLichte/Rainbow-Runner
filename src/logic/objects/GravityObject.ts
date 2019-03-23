import MoveableObject from './MoveableObject.js';
import Position from '../../interfaces/Position.js';
import { GRAVITY_OF_EARTH } from '../conf/conf.js';
import { calcGravity } from '../../func/funcs.js';

export default class GravityObject extends MoveableObject {

  protected mass: number = 10;
  protected gravity: number;

  protected constructor(initialPosition: Position, stepSizes: Position, stepSpeeds: Position) {
    super(initialPosition, stepSizes, stepSpeeds);
    this.gravity = calcGravity(this.mass, GRAVITY_OF_EARTH);
  }
  
  protected calcNewPosition(): Position {
    let pos = super.calcNewPosition();
    pos.vel.y -= this.gravity;
    return pos
  }

}
