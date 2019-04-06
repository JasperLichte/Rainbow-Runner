// @ts-ignore
const THREE = window.THREE;

import Cube from './Cube.js';
import colors from '../../../colors.js';

export default class Wall extends Cube {

  constructor() {
    super(colors['objects-wall']);

    const wireframe = new THREE.LineSegments(
      new THREE.EdgesGeometry(this.object.geometry), 
      new THREE.LineBasicMaterial({color: colors['objects-wall-border'], linewidth: 1})
    );
    wireframe.renderOrder = 1;

    this.object.add(wireframe);
  }

}
