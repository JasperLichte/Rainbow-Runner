// @ts-ignore
const THREE = window.THREE;

import Cube from './Cube.js';
import colors from './../../../colors.js';

export default class Spikes extends Cube {

  constructor() {
    super(colors['objects-spikes']);
    this.geometry = new THREE.ConeGeometry(0.3, 0.3, 32);
    this.object = new THREE.Mesh(this.geometry, this.material);
  }

  public tweakPosition() {
    this.object.position.y -= (0.35 + 0.075);
    return this;
  }

}
