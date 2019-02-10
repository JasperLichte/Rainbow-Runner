const THREE = window.THREE;

import RotatingObject from './RotatingObject.js';
import colors from './../../../colors.js';

export default class Coin extends RotatingObject {

  constructor() {
    super(true, true, colors['objects-coin']); 
    this._geometry = new THREE.TorusGeometry(0.2, 0.05, 16, 100);
    this._object = new THREE.Mesh(this._geometry, this._material);
  }

  tweakPosition() {
    this._object.position.y -= 0.2;
  }

}
