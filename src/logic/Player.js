import exceptions from './../errorhandling/exceptions.js';
import keyboardControls from './../controls/keyboardControls.js';
import { calcGravity } from './../func/funcs.js';
import { GRAVITY_OF_EARTH, STEP_SIZES, STEP_SPEEDS } from './conf/conf.js';
import globals from './../globals.js';
import Level from './Level.js';

const playerControls = keyboardControls['player'];

export default class Player {

  constructor(initialPosition) {
    if (!initialPosition) {
      throw new Error(exceptions['INVALID_POSITION_OBJECT']);
    }

    this._position = initialPosition;    
    this._velocity = {x: 0, y: 0};
    this._mass = 10;
    this._gravity = calcGravity(this._mass, GRAVITY_OF_EARTH);
    this._levelLogic = new Level(globals.helpers.levelHelper.getCurrentLevel());

    // -----------------
    this.getPosition = this.getPosition.bind(this);
    this._listenForControls = this._listenForControls.bind(this);
    this._calcNewPosition = this._calcNewPosition.bind(this);
    this.jump = this.jump.bind(this);
    this.moveForward = this.moveForward.bind(this);
    this.moveBackward = this.moveBackward.bind(this);
    // -----------------

    this._listenForControls();
  }

  getPosition() {
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

  _listenForControls() {
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

  jump() {
    this._velocity.y = 0;

    const targetHeigt = this._position.y + STEP_SIZES['player']['y'];
    const jumpStep = _ => {
      this._position.y += STEP_SPEEDS['player']['y'];

      if (this._position.y >= targetHeigt) {  
        return;
      }
      requestAnimationFrame(jumpStep);
    };
    jumpStep();
    
  }

  moveForward() {
    const target = this._position.x + STEP_SIZES['player']['x'];
    const step = _ => {
      this._position.x += STEP_SPEEDS['player']['x'];

      if (this._position.x >= target) {  
        return;
      }
      requestAnimationFrame(step);
    };
    step();
  }

  moveBackward() {
    const target = this._position.x - STEP_SIZES['player']['x'];
    const step = _ => {
      this._position.x -= STEP_SPEEDS['player']['x'];

      if (this._position.x <= target) {  
        return;
      }
      requestAnimationFrame(step);
    };
    step();
  }

}
