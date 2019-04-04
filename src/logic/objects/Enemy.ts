import MoveableObject from "./MoveableObject.js";
import Position from "../../interfaces/Position.js";
import { STEP_SIZES, STEP_SPEEDS } from "../conf/conf.js";

export default class Enemy extends MoveableObject {

  private left = 0;
  private right = 10;
  private direction = true;

  public constructor(initialPosition: Position) {
    super(initialPosition, STEP_SIZES['enemy'], STEP_SPEEDS['enemy']);
    this.targetX = this.left;
    this.targetXReached = () => this.position.x <= this.left;
  }

  protected targetXReachedCallback(): void {
    if (this.direction) {
      this.targetX = this.left;
      this.targetXReached = () => this.position.x <= this.left;
    } else {
      this.targetX = this.right;
      this.targetXReached = () => this.position.x >= this.right;
    }
    this.direction = !this.direction;
  }

}
