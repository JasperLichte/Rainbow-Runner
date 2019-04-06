import Position from '../../interfaces/Position.js';
import LogicObject from './LogicObject.js';

export default class MoveableObject extends LogicObject {

    protected velocity = {x: 0, y: 0};
    protected stepSizes: Position;
    protected stepSpeeds: Position;
    private targetX: number|null = null;
    private targetY: number|null = null;
    private targetXReached: () => boolean|null = null;
    private targetYReached: () => boolean|null = null;

    protected constructor(initialPosition: Position, stepSizes: Position, stepSpeeds: Position) {
        super(initialPosition);
        this.stepSizes = stepSizes;
        this.stepSpeeds = stepSpeeds;
    }

    public getPosition(): Position {
      const newPos: Position = this.calcNewPosition();
      this.position.x = newPos.x;
      this.position.y = newPos.y;
      this.velocity.x = newPos.vel.x;
      this.velocity.y = newPos.vel.y;
      return this.position;
    }

    protected calcNewPosition(): Position {      
      let x = this.position.x + this.velocity.x;
      let y = this.position.y + this.velocity.y;
      [x, y] = this.moveToTargets(x, y);

      return {
        x,
        y,
        vel: {
          x: this.velocity.x,
          y: this.velocity.y,
        }
      };
    }

    protected setTargetX(target: number) {
      this.targetX = target;
      if (this.position.x > this.targetX) {
        this.targetXReached = () => this.position.x <= this.targetX;
      } else if (this.position.x < this.targetX) {
        this.targetXReached = () => this.position.x >= this.targetX;
      }
    }

    protected setTargetY(target: number) {
      this.targetY = target;
      if (this.position.y > this.targetY) {
        this.targetYReached = () => this.position.y <= this.targetY;
      } else if (this.position.y < this.targetY) {
        this.targetYReached = () => this.position.y >= this.targetY;
      }
    }

    private moveToTargets(x: number, y: number): [number, number] {
      if (this.targetX != null) {
        if (this.targetXReached && this.targetXReached()) {
          this.resetXTarget();
          this.targetXReachedCallback();
        } else {
          if (x < this.targetX) {
            x += this.stepSpeeds.x;
          } else if (x > this.targetX) {
            x -= this.stepSpeeds.x;
          }
        }
      }

      if (this.targetY != null) {
        if (this.targetYReached && this.targetYReached()) {
          this.resetYTarget();
          this.targetYReachedCallback();
        } else {
          if (y < this.targetY) {
            y += this.stepSpeeds.y;
          } else if (y > this.targetY) {
            y -= this.stepSpeeds.y;
          }
        }
      }

      return [x, y];
    }

    private resetXTarget() {
      this.targetX = this.targetXReached = null;
    }

    private resetYTarget() {
      this.targetY = this.targetYReached = null;
    }

    protected targetXReachedCallback(): void {}

    protected targetYReachedCallback(): void {}

}
