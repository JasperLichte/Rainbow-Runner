import GravityObject from './GravityObject.js';
import Position from '../../interfaces/Position.js';
import AnimationLoop from '../../render/AnimationLoop.js';

export default class ControllableObject extends GravityObject {

    protected controls;

    protected constructor(initialPosition: Position, stepSizes: Position, stepSpeeds: Position) {
        super(initialPosition, stepSizes, stepSpeeds);
    }

    protected listenForControls(): void {
      window.addEventListener('keydown', e => {
        if (!AnimationLoop.isRunning() || !(e.code in this.controls)) {
          return;
        }
        const control = this.controls[e.code];
        this[control.action] && this[control.action]();
      });
    }

}