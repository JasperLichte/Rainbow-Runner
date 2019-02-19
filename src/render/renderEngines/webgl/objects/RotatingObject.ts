import Cube from './Cube.js';

export default class RotatingObject extends Cube {

  protected rotationSpeed: number;
  protected rotationDir: boolean;

  constructor(randomSpeed = true, randomDir = true, color = '#ffffff') {
    super(color);

    this.rotationSpeed = 0.01;
    if (randomSpeed) {
      this.rotationSpeed = Math.random() * 0.050 + 0.025;
    }
    this.rotationDir = true;
    if (randomDir) {
      this.rotationDir = (Math.random() > 0.5);
    }

    this.rotate = this.rotate.bind(this);

    this.rotate();
  }

  rotate(): RotatingObject {
    if (this.rotationDir) {
      this.object.rotation.y += this.rotationSpeed;    
    } else {
      this.object.rotation.y -= this.rotationSpeed;  
    }
    requestAnimationFrame(this.rotate);
    return this;
  }

}
