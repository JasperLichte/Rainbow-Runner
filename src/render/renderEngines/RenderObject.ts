import Position from "../../interfaces/Position";
import Size from "../../interfaces/Size";

export default class RenderObject {

  protected object: HTMLElement | any;
  protected position: Position = {x: null, y: null};
  protected size: Size = {width: 1, height: 1};

  public getObject() {
    return this.object;
  }

  public tweakPosition(): RenderObject {
    return this;
  }

  public setInitialPosition(position: Position, centerElement = true): RenderObject {
    this.position = position;
    centerElement && this.center();

    return this;
  }

  public getInitialPosition(): Position {  
    return this.position;
  }

  public getSize(): Size {
    return this.size;
  }

  protected center(): RenderObject {
    return this;
  }

  public move(position: Position): RenderObject {
    this.position = position;
    return this;
  }

  public rotate(): RenderObject {
    return this;
  }

}
