const THREE = window.THREE;

import Cube from './Cube.js';
import colors from './../colors.js';

export default class Wall extends Cube {

  constructor() {
    super(new THREE.Color(colors.objects.wall.body));

    const geo = new THREE.EdgesGeometry(this._cube.geometry);
    const mat = new THREE.LineBasicMaterial({color: colors.objects.wall.border, linewidth: 1});
    const wireframe = new THREE.LineSegments(geo, mat);
    wireframe.renderOrder = 1;
    this._cube.add(wireframe);
  }

}
