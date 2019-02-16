// @ts-ignore
const THREE = window.THREE;
import exceptions from './../../../../errorhandling/exceptions.js';

export default class Cube {

  protected geometry;
  protected material;
  protected object;
  protected position;

  constructor(color = '#ffffff') {    
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({color: color});
    this.object = new THREE.Mesh(this.geometry, this.material);
  }

  public getObject() {
    return this.object;
  }

  public tweakPosition() {}

  public setInitialPosition(position) {
    if (!position.hasOwnProperty('x') || !position.hasOwnProperty('y')) {
      throw new Error(exceptions['INVALID_POSITION_OBJECT']);
    }
    this.position = {
      x: position.x,
      y: position.y
    };
  }

  public getInitialPosition() {  
    return this.position;
  }

  public move(x, y) {
    this.object.position.set(x, y, 0);
    return this;
  }

}
