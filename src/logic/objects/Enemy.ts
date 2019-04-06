import MoveableObject from "./MoveableObject.js";
import Position from "../../interfaces/Position.js";
import { STEP_SIZES, STEP_SPEEDS } from "../conf/conf.js";

export default class Enemy extends MoveableObject {

  private left = 0;
  private right = 10;
  private direction = true;

  public constructor(initialPosition: Position) {
    super(initialPosition, STEP_SIZES['enemy'], STEP_SPEEDS['enemy']);
    this.setTargetX(this.left);
  }

  protected targetXReachedCallback(): void {
    if (this.direction) {
      this.setTargetX(this.left);
    } else {
      this.setTargetX(this.right);
    }
    this.direction = !this.direction;
  }

}
