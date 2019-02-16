// @ts-ignore
const THREE = window.THREE;

import RotatingObject from './RotatingObject.js';
import colors from './../../../colors.js';

export default class Diamond extends RotatingObject {

  constructor() {
    super(true, true, colors['objects-diamond']);  
    this.geometry = new THREE.OctahedronGeometry(0.3);
    this.object = new THREE.Mesh(this.geometry, this.material);
  }

  tweakPosition() {
    this.object.position.y -= 0.2;
  }

}
