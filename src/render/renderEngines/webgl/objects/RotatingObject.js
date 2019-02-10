const THREE = window.THREE;

import Cube from './Cube.js';

export default class RotatingObject extends Cube {

  constructor(randomSpeed = true, randomDir = true, color = 0xffffff) {
    super(color);

    this._rotationSpeed = 0.01;
    if (randomSpeed) {
      this._rotationSpeed = Math.random() * 0.050 + 0.025;
    }
    this._rotationDir = true;
    if (randomDir) {
      this._rotationDir = (Math.random() > 0.5);
    }

    //------------
    this._rotate = this._rotate.bind(this);
    //------------
    
    this._rotate();
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
