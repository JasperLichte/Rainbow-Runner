import exceptions from './../errorhandling/exceptions.js';
import keyboardControls from './../controls/keyboardControls.js';

const playerControls = keyboardControls['player'];

export default class Player {

  constructor(renderObject) {
    if (!renderObject) {
      throw new Error(exceptions['INVALID_RENDER_OBJECT']);
    }

    this._position = renderObject.getInitialPosition();
    
    this._velocity = {x: 0, y: 0};
    this._gravity = 0.0000125;

    // -----------------
    this.getPosition = this.getPosition.bind(this);
    this._listenForControls = this._listenForControls.bind(this);
    this._calcVelocity = this._calcVelocity.bind(this);
    this._jump = this._jump.bind(this);
    // -----------------

    this._listenForControls();
  }

  getPosition() {
    this._calcVelocity();
    return this._position;
  }

  _listenForControls() {
    window.addEventListener('keydown', e => {
      if (!(e.code in playerControls)) {
        return;
      }
      const control = playerControls[e.code];
      if (this[control.action]) {
        this[control.action]();
      }   
    });
  }

  _calcVelocity() {
    this._position.x += this._velocity.x;
    this._position.y += this._velocity.y;

    // gravity
    this._velocity.y -= this._gravity;
  }

  _jump() {
    this._velocity.y = 0;
    this._position.y += 1;
  }

}
