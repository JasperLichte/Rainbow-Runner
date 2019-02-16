import exceptions from './../errorhandling/exceptions.js';
import { playerControls } from './../controls/keyboardControls.js';
import { calcGravity } from './../func/funcs.js';
import { GRAVITY_OF_EARTH, STEP_SIZES, STEP_SPEEDS } from './conf/conf.js';
import globals from './../globals.js';
import Level from './Level.js';

export default class Player {

  private _position;
  private _velocity = {x: 0, y: 0};
  private _mass: number = 10;
  private _gravity: number;
  private _levelLogic;

  public constructor(initialPosition) {
    if (!initialPosition) {
      throw new Error(exceptions['INVALID_POSITION_OBJECT']);
    }

    this._position = initialPosition;
    this._gravity = calcGravity(this._mass, GRAVITY_OF_EARTH);
    this._levelLogic = new Level(globals.helpers.levelHelper.getCurrentLevel());

    this._listenForControls();
  }

  public getPosition() {
    const newPos = this._calcNewPosition();
    if (!(this._levelLogic.newPositionIsAWall(newPos.x, newPos.y))) {
      this._position.x = newPos.x;
      this._position.y = newPos.y;
      this._velocity.x = newPos.vel.x;
      this._velocity.y = newPos.vel.y;
    }
    this._calcNewPosition();
    return this._position;
  }

  private _listenForControls(): void {
    window.addEventListener('keydown', e => {
      if (!(e.code in playerControls)) {
        return;
      }
      const control = playerControls[e.code];
      this[control.action] && this[control.action]();
    });
  }

  _calcNewPosition() {
    const newX = this._position.x + this._velocity.x;
    const newY = this._position.y + this._velocity.y;
    const newVelY = this._velocity.y - this._gravity;
    return {
      x: newX,
      y: newY,
      vel: {
        x: this._velocity.x,
        y: newVelY,
      }
    };
  }

  public jump(): Player {
    this._velocity.y = 0;

    const targetHeigt = this._position.y + STEP_SIZES['player']['y'];
    const jumpStep = () => {
      this._position.y += STEP_SPEEDS['player']['y'];

      if (this._position.y >= targetHeigt) {  
        return;
      }
      requestAnimationFrame(jumpStep);
    };
    jumpStep();
    return this;    
  }

  public moveForward(): Player {
    const target = this._position.x + STEP_SIZES['player']['x'];
    const step = () => {
      this._position.x += STEP_SPEEDS['player']['x'];

      if (this._position.x >= target) {  
        return;
      }
      requestAnimationFrame(step);
    };
    step();
    return this;
  }

  public moveBackward(): Player {
    const target = this._position.x - STEP_SIZES['player']['x'];
    const step = () => {
      this._position.x -= STEP_SPEEDS['player']['x'];

      if (this._position.x <= target) {  
        return;
      }
      requestAnimationFrame(step);
    };
    step();
    return this;
  }

}
