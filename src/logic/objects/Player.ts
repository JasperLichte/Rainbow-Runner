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

    const targetHeigt = this.position.y + STEP_SIZES['player']['y'];
    const jumpStep = () => {
      this.position.y += STEP_SPEEDS['player']['y'];

      if (this.position.y >= targetHeigt) {  
        return;
      }
      requestAnimationFrame(jumpStep);
    };
    jumpStep();
    return this;    
  }

  public moveForward(): Player {
    const target = this.position.x + STEP_SIZES['player']['x'];
    const step = () => {
      this.position.x += STEP_SPEEDS['player']['x'];

      if (this.position.x >= target) {  
        return;
      }
      requestAnimationFrame(step);
    };
    step();
    return this;
  }

  public moveBackward(): Player {
    const target = this.position.x - STEP_SIZES['player']['x'];
    const step = () => {
      this.position.x -= STEP_SPEEDS['player']['x'];

      if (this.position.x <= target) {  
        return;
      }
      requestAnimationFrame(step);
    };
    step();
    return this;
  }

}
