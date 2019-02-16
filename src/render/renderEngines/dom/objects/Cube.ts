import exceptions from './../../../../errorhandling/exceptions.js';

export default class Cube {

  protected _scale: number = 50;
  protected _className: string;
  protected _size = {width: 0, height: 0, depth: 0};
  protected _object: HTMLElement;
  protected _position;

  public constructor(className = 'void') {
    this._className = className.toLowerCase();
    this._size = {
      width: 1,
      height: 1,
      depth: 1,
    };
    this._object = this._buildObject();
  }

  private _buildObject(): HTMLElement {
    const el = document.createElement('span');
    el.style.height = (this._size.height * this._scale)+ 'px';
    el.style.width = (this._size.width * this._scale) + 'px';
    el.classList.add('block');
    el.classList.add(this._className);
    return el;
  }

  public getObject(): HTMLElement {
    return this._object;
  }

  public getDimensions() {
    return this._size;
  }

  public setInitialPosition(pos, centerElement = true): Cube {
    if (!pos.hasOwnProperty('x') || !pos.hasOwnProperty('y')) {
      throw new Error(exceptions['INVALID_POSITION_OBJECT']);
    }
    this._position = pos;
    this.move(pos.x, pos.y);
    centerElement && this.center();

    return this;
  }

  public getInitialPosition() {
    return this._position;
  }

  public move(x, y): Cube {
    this._object.style.left = (x * this._scale) + 'px';
    this._object.style.top = (y * this._scale * -1) + 'px';
    return this;
  }

  public center(): Cube {
    this._object.style.left += ((1 - this._size.width) * this._scale / 2) + 'px';
    this._object.style.top += ((1 - this._size.height) * this._scale / 2) + 'px';
    return this;
  }

}
