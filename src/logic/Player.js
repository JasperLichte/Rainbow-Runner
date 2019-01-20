import exceptions from './../errorhandling/exceptions.js';
import keyboardControls from './../controls/keyboardControls.js';

const playerControls = keyboardControls.player;

export default class Player {

  constructor(renderObject) {
    if (!renderObject) {
      throw new Error(exceptions['INVALID_RENDER_OBJECT']);
    }

    this._position = renderObject.getInitialPosition();

    // -----------------
    this.getPosition = this.getPosition.bind(this);
    this._listenForControls = this._listenForControls.bind(this);
    this._jump = this._jump.bind(this);
    // -----------------

    this._listenForControls();
  }

  getPosition() {
    return this._position;
  }

  _listenForControls() {
    window.addEventListener('keydown', e => {
      const control = playerControls[e.code];
      if (this[control.action]) {
        this[control.action]();
      }   
    });
  }

  _jump() {
    this._position.y -= 1;
  }

}
