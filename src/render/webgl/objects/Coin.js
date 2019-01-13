const THREE = window.THREE;
import colors from './../colors.js';

export default class Coin {

  constructor() {    
    this._geometry = new THREE.BoxGeometry(0.85, 0.85, 0.85);
    this._material = new THREE.MeshBasicMaterial({color: colors.objects.coin});
    this._object = new THREE.Mesh(this._geometry, this._material);

    //------------
    this.getObject = this.getObject.bind(this);
    //------------
  }

  getObject() {
    return this._object;
  }

}
