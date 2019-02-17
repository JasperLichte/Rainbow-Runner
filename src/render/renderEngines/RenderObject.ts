import Position from "../../interfaces/Position";

export default class RenderObject {

  protected object;
  protected position: Position = {x: null, y: null};
  protected size = {width: 1, height: 1, depth: 1};

  public getObject() {
    return this.object;
  }

  public tweakPosition(): RenderObject {
    return this;
  }

  public setInitialPosition(position, centerElement = true): RenderObject {
    this.position = {
      x: position.x,
      y: position.y
    };
    centerElement && this.center();

    return this;
  }

  public getInitialPosition(): Position {  
    return this.position;
  }

  public getDimensions() {
    return this.size;
  }

  protected center(): RenderObject {
    return this;
  }

  public move(position: Position): RenderObject {
    this.position = position;
    return this;
  }

}
