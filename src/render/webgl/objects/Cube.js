const THREE = window.THREE;

export default class Cube {

  constructor(color = 0xffffff) {    
    this._geometry = new THREE.BoxGeometry(0.85, 0.85, 0.85);
    this._material = new THREE.MeshBasicMaterial({color: color});
    this._cube = new THREE.Mesh(this._geometry, this._material);

    const geo = new THREE.EdgesGeometry(this._cube.geometry);
    const mat = new THREE.LineBasicMaterial({color: 0x999999, linewidth: 1});
    const wireframe = new THREE.LineSegments(geo, mat);
    wireframe.renderOrder = 1;
    this._cube.add(wireframe);

    //------------
    this.getCube = this.getCube.bind(this);
    //------------
  }

  getCube() {
    return this._cube;
  }

}
