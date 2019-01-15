const THREE = window.THREE;

import Cube from './Cube.js';
import colors from './../../colors.js';

export default class Player extends Cube {

  constructor() {
    super(colors['objects-player']);
    this._geometry = new THREE.BoxGeometry(0.85, 0.85, 0.85);
    this._object = new THREE.Mesh(this._geometry, this._material);

    //------------
    this.getObject = this.getObject.bind(this);
    //------------
  }

  tweakPosition() {
    this._object.position.y -= 0.15;
  }  

}
