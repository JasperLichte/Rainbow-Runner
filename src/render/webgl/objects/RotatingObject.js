const THREE = window.THREE;

export default class RotatingObject {

  constructor(color = 0xffffff) {
    this._geometry = new THREE.BoxGeometry(0.85, 0.85, 0.85);
    this._material = new THREE.MeshBasicMaterial({color: color});
    this._object = new THREE.Mesh(this._geometry, this._material);

    this._rotationSpeed = Math.random() * 0.050 + 0.025;
    this._rotationDir = (Math.random() > 0.5);

    //------------
    this.getObject = this.getObject.bind(this);
    this._rotate = this._rotate.bind(this);
    //------------
    
    this._rotate();
  }

  getObject() {
    return this._object;
  }

  _rotate() {
    if (this._rotationDir) {
      this._object.rotation.y += this._rotationSpeed;    
    } else {
      this._object.rotation.y -= this._rotationSpeed;  
    }
    requestAnimationFrame(this._rotate);
  }

}
