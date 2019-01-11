const THREE = window.THREE;

export default class Cube {

  constructor(color = 0xffffff) {
    this._geometry = new THREE.BoxGeometry(10, 10, 10);
    this._material = new THREE.MeshBasicMaterial({color: color});
    this._cube = new THREE.Mesh(this._geometry, this._material);

    //------------
    this.getCube = this.getCube.bind(this);
    //------------
  }

  getCube() {
    return this._cube;
  }

}
