const THREE = window.THREE;

import RotatingObject from './RotatingObject.js';
import colors from './../../colors.js';

export default class Diamond extends RotatingObject {

  constructor() {
    super();  
    this._geometry = new THREE.OctahedronGeometry(0.3);
    this._material = new THREE.MeshBasicMaterial({color: colors['objects-diamond']});
    this._object = new THREE.Mesh(this._geometry, this._material);
  }

  tweakPosition() {
    this._object.position.y -= 0.2;
  }

}
