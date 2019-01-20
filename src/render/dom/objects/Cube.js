import exceptions from './../../../errorhandling/exceptions.js';

export default class Cube {

  constructor(className = 'void') {
    this._scale = 50;
    this._className = className.toLowerCase();
    this._size = {
      width: 1,
      height: 1,
      depth: 1,
    };
    this._object = this._buildObject();
    this._position = null;

    //------------
    this._buildObject = this._buildObject.bind(this);
    this.getObject = this.getObject.bind(this);
    this.getDimensions = this.getDimensions.bind(this);
    this.setInitialPosition = this.setInitialPosition.bind(this);
    this.getInitialPosition = this.getInitialPosition.bind(this);
    this.move = this.move.bind(this);
    this.center = this.center.bind(this);
  }

  _buildObject() {
    const el = document.createElement('span');
    el.style.height = (this._size.height * this._scale)+ 'px';
    el.style.width = (this._size.width * this._scale) + 'px';
    el.classList.add('block');
    el.classList.add(this._className);
    return el;
  }

  getObject() {
    return this._object;
  }

  getDimensions() {
    return this._size;
  }

  setInitialPosition(pos, centerElement = true) {
    if (!pos.hasOwnProperty('x') || !pos.hasOwnProperty('y')) {
      throw new Error(exceptions['INVALID_POSITION_OBJECT']);
    }
    this._position = pos;
    this.move(pos.x, pos.y);
    centerElement && this.center();

    return this;
  }

  getInitialPosition() {
    return this._position;
  }

  move(x, y) {
    this._object.style.left = (x * this._scale) + 'px';
    this._object.style.top = (y * this._scale) + 'px';
    return;
  }

  center() {
    this._object.style.left += ((1 - this._size.width) * this._scale / 2) + 'px';
    this._object.style.top += ((1 - this._size.height) * this._scale / 2) + 'px';
    return this;
  }

}
