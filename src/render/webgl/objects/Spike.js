const THREE = window.THREE;
import colors from './../../colors.js';

export default class Spike {

  constructor() {
    this._geometry = new THREE.ConeGeometry(0.3, 0.3, 32);
    this._material = new THREE.MeshBasicMaterial({color: colors['objects-spike']});
    this._object = new THREE.Mesh(this._geometry, this._material);

    //------------
    this.getObject = this.getObject.bind(this);
    this.tweakPosition = this.tweakPosition.bind(this);
    //------------
  }

  getObject() {
    return this._object;
  }

  tweakPosition() {
    this._object.position.y -= (0.35 + 0.075);
  }

}
