import { playerControls } from '../../controls/keyboardControls.js';
import { STEP_SIZES, STEP_SPEEDS } from '../conf/conf.js';
import Position from '../../interfaces/Position.js';
import ControllableObject from './ControllableObject.js';

export default class Player extends ControllableObject {

  public constructor(initialPosition: Position) {
    super(initialPosition);
    this.controls = playerControls;

    this.listenForControls();
  }

  public jump(): Player {
    this.velocity.y = 0;
    this.position.y = this.position.y + STEP_SIZES['player']['y'];
    return this;    
  }

  public moveForward(): Player {
    this.position.x = this.position.x + STEP_SIZES['player']['x'];
    return this;
  }

  public moveBackward(): Player {
    this.position.x = this.position.x - STEP_SIZES['player']['x'];
    return this;
  }

}
