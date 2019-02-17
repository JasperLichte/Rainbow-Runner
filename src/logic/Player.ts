import exceptions from './../errorhandling/exceptions.js';
import { playerControls } from './../controls/keyboardControls.js';
import { calcGravity } from './../func/funcs.js';
import { GRAVITY_OF_EARTH, STEP_SIZES, STEP_SPEEDS } from './conf/conf.js';
import globals from './../globals.js';
import Level from './Level.js';
import Position from './../interfaces/Position.js';

export default class Player {

  private position: Position;
  private velocity = {x: 0, y: 0};
  private mass: number = 10;
  private gravity: number;
  private levelLogic;

  public constructor(initialPosition: Position) {
    if (!initialPosition) {
      throw new Error(exceptions['INVALID_POSITION_OBJECT']);
    }

    this.position = initialPosition;
    this.gravity = calcGravity(this.mass, GRAVITY_OF_EARTH);
    this.levelLogic = new Level(globals.helpers.levelHelper.getCurrentLevel());

    this.listenForControls();
  }

  public getPosition(): Position {
    const newPos: Position = this.calcNewPosition();
    if (!(this.levelLogic.newPositionIsAWall(newPos))) {
      this.position.x = newPos.x;
      this.position.y = newPos.y;
      this.velocity.x = newPos.vel.x;
      this.velocity.y = newPos.vel.y;
    }
    this.calcNewPosition();
    return this.position;
  }

  private listenForControls(): void {
    window.addEventListener('keydown', e => {
      if (!(e.code in playerControls)) {
        return;
      }
      const control = playerControls[e.code];
      this[control.action] && this[control.action]();
    });
  }

  calcNewPosition(): Position {
    return {
      x: this.position.x + this.velocity.x,
      y: this.position.y + this.velocity.y,
      vel: {
        x: this.velocity.x,
        y: this.velocity.y - this.gravity,
      }
    };
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
