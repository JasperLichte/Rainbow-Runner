// @ts-ignore
const THREE = window.THREE;

import RotatingObject from './RotatingObject.js';
import colors from './../../../colors.js';

export default class Coin extends RotatingObject {

  constructor() {
    super(true, true, colors['objects-coin']); 
    this.geometry = new THREE.TorusGeometry(0.2, 0.05, 16, 100);
    this.object = new THREE.Mesh(this.geometry, this.material);
  }

  tweakPosition(): Coin {
    this.object.position.y -= 0.2;
    return this;
  }

}
