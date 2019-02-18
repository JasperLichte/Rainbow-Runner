import Position from '../../interfaces/Position.js';
import LogicObject from './LogicObject.js';

export default class MoveableObject extends LogicObject {

    protected velocity = {x: 0, y: 0};

    constructor(initialPosition: Position) {
        super(initialPosition);
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
      return {
        x: this.position.x + this.velocity.x,
        y: this.position.y + this.velocity.y,
        vel: {
          x: this.velocity.x,
          y: this.velocity.y,
        }
      };
    }

}
