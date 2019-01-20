const THREE = window.THREE;

import Cube from './Cube.js';
import colors from './../../colors.js';

export default class Player extends Cube {

  constructor() {
    super(colors['objects-player']);
  }

  tweakPosition() {
    this._object.position.y -= 0.15;
  }  

}
