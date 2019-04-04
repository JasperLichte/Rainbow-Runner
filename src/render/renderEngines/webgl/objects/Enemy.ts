import Cube from './Cube.js';
import colors from './../../../colors.js';

export default class Enemy extends Cube {

  constructor() {
    super(colors['objects-enemy']);
  }

}
