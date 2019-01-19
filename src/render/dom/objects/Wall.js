import Cube from './Cube.js';

export default class Wall extends Cube {
  constructor() {
    super('wall');
    this._size = {
      width: 0.85,
      height: 0.85,
    };
    this._object = this._buildObject();
  }
}
