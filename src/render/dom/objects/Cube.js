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
    this._position = {};

    //------------
    this._buildObject = this._buildObject.bind(this);
    this.getObject = this.getObject.bind(this);
    this.getDimensions = this.getDimensions.bind(this);
    this.setPosition = this.setPosition.bind(this);
    //------------
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

  setPosition(pos, centerElement = true) {
    this._position = pos;
    if (centerElement) {
      this._object.style.left = (pos.x * this._scale + ((1 - this._size.width) * this._scale / 2)) + 'px';
      this._object.style.top = (pos.y * this._scale + ((1 - this._size.height) * this._scale / 2)) + 'px';
      return this;
    }
    this._object.style.left = (pos.x * this._scale) + 'px';
    this._object.style.top = (pos.y * this._scale) + 'px';
    return this;
  }

}
