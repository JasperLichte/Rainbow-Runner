const THREE = window.THREE;

import Cube from './Cube.js';
import colors from './../../colors.js';

export default class Wall extends Cube {

  constructor() {
    super();
    this._geometry = new THREE.BoxGeometry(0.85, 0.85, 0.85);
    this._material = new THREE.MeshBasicMaterial({color: new THREE.Color(colors['objects-wall-body'])});
    this._object = new THREE.Mesh(this._geometry, this._material);

    const wireframe = new THREE.LineSegments(
      new THREE.EdgesGeometry(this._object.geometry), 
      new THREE.LineBasicMaterial({color: colors['objects-wall-border'], linewidth: 1})
    );
    wireframe.renderOrder = 1;

    this._object.add(wireframe);
  }

}
