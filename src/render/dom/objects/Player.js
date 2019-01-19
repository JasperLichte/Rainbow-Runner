import Cube from './Cube.js';

export default class Player extends Cube {
  constructor() {
    super('player');
    this._size = {
      width: 0.85,
      height: 0.85,
    };
    this._object = this._buildObject();
  }
}
