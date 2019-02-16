// @ts-ignore
const THREE = window.THREE;

import Cube from './Cube.js';
import colors from './../../../colors.js';

export default class Spikes extends Cube {

  constructor() {
    super(colors['objects-spikes']);
    this._geometry = new THREE.ConeGeometry(0.3, 0.3, 32);
    this._object = new THREE.Mesh(this._geometry, this._material);
  }

  public tweakPosition() {
    this._object.position.y -= (0.35 + 0.075);
  }

}
