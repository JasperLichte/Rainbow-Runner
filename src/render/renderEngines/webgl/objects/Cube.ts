// @ts-ignore
const THREE = window.THREE;
import exceptions from './../../../../errorhandling/exceptions.js';

export default class Cube {

  protected _geometry;
  protected _material;
  protected _object;
  protected _position;

  constructor(color = '#ffffff') {    
    this._geometry = new THREE.BoxGeometry(1, 1, 1);
    this._material = new THREE.MeshBasicMaterial({color: color});
    this._object = new THREE.Mesh(this._geometry, this._material);
  }

  public getObject() {
    return this._object;
  }

  public tweakPosition() {}

  public setInitialPosition(position) {
    if (!position.hasOwnProperty('x') || !position.hasOwnProperty('y')) {
      throw new Error(exceptions['INVALID_POSITION_OBJECT']);
    }
    this._position = {
      x: position.x,
      y: position.y
    };
  }

  public getInitialPosition() {  
    return this._position;
  }

  public move(x, y) {
    this._object.position.set(x, y, 0);
    return this;
  }

}
