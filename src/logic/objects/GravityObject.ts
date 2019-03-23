import MoveableObject from './MoveableObject.js';
import Position from '../../interfaces/Position.js';
import { GRAVITY_OF_EARTH } from '../conf/conf.js';
import { calcGravity } from '../../func/funcs.js';

export default class GravityObject extends MoveableObject {

  protected mass: number = 10;
  protected gravity: number;

  constructor(initialPosition :Position) {
    super(initialPosition);
    this.gravity = calcGravity(this.mass, GRAVITY_OF_EARTH);
  }
  
  protected calcNewPosition(): Position {
    return {
      x: this.position.x + this.velocity.x,
      y: this.position.y + this.velocity.y,
      vel: {
        x: this.velocity.x,
        y: this.velocity.y - this.gravity,
      }
    };
  }

}
