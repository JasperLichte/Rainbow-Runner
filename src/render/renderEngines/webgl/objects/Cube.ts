// @ts-ignore
const THREE = window.THREE;
import RenderObject from '../../RenderObject.js';

export default class Cube extends RenderObject {

  protected geometry;
  protected material;

  constructor(color = '#ffffff') {
    super();
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshBasicMaterial({color: color});
    this.object = new THREE.Mesh(this.geometry, this.material);
  }

  public move(x, y): Cube {
    super.move(x, y);
    this.object.position.set(x, y, 0);
    return this;
  }

}
