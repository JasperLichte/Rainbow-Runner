import { playerControls } from '../../controls/keyboardControls.js';
import { STEP_SIZES, STEP_SPEEDS } from '../conf/conf.js';
import Position from '../../interfaces/Position.js';
import ControllableObject from './ControllableObject.js';

export default class Player extends ControllableObject {

  public constructor(initialPosition: Position) {
    super(initialPosition, STEP_SIZES['player'], STEP_SPEEDS['player']);
    this.controls = playerControls;

    this.listenForControls();
  }

  public jump(): Player {
    this.velocity.y = 0;
    this.targetY = this.position.y + this.stepSizes.y;
    this.targetYReached = () => this.position.y >= this.targetY;
    return this;    
  }

  public moveForward(): Player {
    this.targetX = this.position.x + this.stepSizes.x;
    this.targetYReached = () => this.position.x >= this.targetX;
    return this;
  }

  public moveBackward(): Player {
    this.targetX = this.position.x - this.stepSizes.x;
    this.targetYReached = () => this.position.x <= this.targetX;
    return this;
  }

}
