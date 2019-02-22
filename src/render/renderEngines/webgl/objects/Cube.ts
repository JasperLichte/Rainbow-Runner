// @ts-ignore
const THREE = window.THREE;
import RenderObject from '../../RenderObject.js';
import Position from '../../../../interfaces/Position.js';

export default class Cube extends RenderObject {

  protected geometry;
  protected material;

  constructor(color: string = '#ffffff') {
    super();
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({color: color});
    this.object = new THREE.Mesh(this.geometry, this.material);
  }

  public move(position: Position): Cube {
    super.move(position);
    this.object.position.set(position.x, position.y, 0);
    return this;
  }

}
