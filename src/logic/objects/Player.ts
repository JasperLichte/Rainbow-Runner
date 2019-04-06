import { playerControls } from '../../config/keyboardControls.js';
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
    this.setTargetY(this.position.y + this.stepSizes.y);
    return this;    
  }

  public moveForward(): Player {
    this.setTargetX(this.position.x + this.stepSizes.x);
    return this;
  }

  public moveBackward(): Player {
    this.setTargetX(this.position.x - this.stepSizes.x);
    return this;
  }

}
