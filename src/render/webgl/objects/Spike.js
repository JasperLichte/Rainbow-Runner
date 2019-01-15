const THREE = window.THREE;

import Cube from './Cube.js';
import colors from './../../colors.js';

export default class Spike extends Cube {

  constructor() {
    super();
    this._geometry = new THREE.ConeGeometry(0.3, 0.3, 32);
    this._material = new THREE.MeshBasicMaterial({color: colors['objects-spike']});
    this._object = new THREE.Mesh(this._geometry, this._material);
  }

  tweakPosition() {
    this._object.position.y -= (0.35 + 0.075);
  }

}
