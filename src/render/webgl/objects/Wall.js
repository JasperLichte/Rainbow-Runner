const THREE = window.THREE;

import Cube from './Cube.js';
import colors from './../colors.js';

export default class Wall extends Cube {

  constructor() {
    super(new THREE.Color(colors.objects.wall));
  }

}
