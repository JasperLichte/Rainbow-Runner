const THREE = window.THREE;

import Cube from './Cube.js';
import colors from './../../colors.js';

export default class Wall extends Cube {

  constructor() {
    super(new THREE.Color(colors['objects-wall-body']));

    const wireframe = new THREE.LineSegments(
      new THREE.EdgesGeometry(this._object.geometry), 
      new THREE.LineBasicMaterial({color: colors['objects-wall-border'], linewidth: 1})
    );
    wireframe.renderOrder = 1;
    this._object.add(wireframe);
  }

}
