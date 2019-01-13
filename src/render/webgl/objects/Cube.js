const THREE = window.THREE;

export default class Cube {

  constructor(color = 0xffffff) {    
    this._geometry = new THREE.BoxGeometry(0.85, 0.85, 0.85);
    this._material = new THREE.MeshBasicMaterial({color: color});
    this._object = new THREE.Mesh(this._geometry, this._material);

    //------------
    this.getObject = this.getObject.bind(this);
    //------------
  }

  getObject() {
    return this._object;
  }

}
