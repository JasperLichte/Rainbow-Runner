import GravityObject from './GravityObject.js';
import Position from '../../interfaces/Position.js';

export default class ControllableObject extends GravityObject {

    protected controls;

    constructor(initialPosition: Position) {
        super(initialPosition);
    }

    protected listenForControls(): void {
      window.addEventListener('keydown', e => {
        if (!(e.code in this.controls)) {
          return;
        }
        const control = this.controls[e.code];
        this[control.action] && this[control.action]();
      });
    }

}