import exceptions from './../../../../errorhandling/exceptions.js';

export default class Cube {

  protected scale: number = 50;
  protected className: string;
  protected size = {width: 0, height: 0, depth: 0};
  protected object: HTMLElement;
  protected position;

  public constructor(className = 'void') {
    this.className = className.toLowerCase();
    this.size = {
      width: 1,
      height: 1,
      depth: 1,
    };
    this.object = this.buildObject();
  }

  private buildObject(): HTMLElement {
    const el = document.createElement('span');
    el.style.height = (this.size.height * this.scale)+ 'px';
    el.style.width = (this.size.width * this.scale) + 'px';
    el.classList.add('block');
    el.classList.add(this.className);
    return el;
  }

  public getObject(): HTMLElement {
    return this.object;
  }

  public getDimensions() {
    return this.size;
  }

  public setInitialPosition(pos, centerElement = true): Cube {
    if (!pos.hasOwnProperty('x') || !pos.hasOwnProperty('y')) {
      throw new Error(exceptions['INVALID_POSITION_OBJECT']);
    }
    this.position = pos;
    this.move(pos.x, pos.y);
    centerElement && this.center();

    return this;
  }

  public getInitialPosition() {
    return this.position;
  }

  public move(x, y): Cube {
    this.object.style.left = (x * this.scale) + 'px';
    this.object.style.top = (y * this.scale * -1) + 'px';
    return this;
  }

  public center(): Cube {
    this.object.style.left += ((1 - this.size.width) * this.scale / 2) + 'px';
    this.object.style.top += ((1 - this.size.height) * this.scale / 2) + 'px';
    return this;
  }

}
