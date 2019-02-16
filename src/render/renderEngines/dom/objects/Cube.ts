import RenderObject from '../../RenderObject.js';
import exceptions from './../../../../errorhandling/exceptions.js';

export default class Cube extends RenderObject {

  protected scale: number = 50;
  protected className: string;
  protected object: HTMLElement;

  public constructor(className = 'void') {
    super();    
    this.className = className.toLowerCase();
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

  public setInitialPosition(pos, centerElement = true): Cube {
    this.object.style.left = (pos.x * this.scale) + 'px';
    this.object.style.top = (pos.y * this.scale * -1) + 'px';
    super.setInitialPosition(pos, centerElement);

    return this;
  }

  protected center(): Cube {
    this.object.style.left += ((1 - this.size.width) * this.scale / 2) + 'px';
    this.object.style.top += ((1 - this.size.height) * this.scale / 2) + 'px';
    return this;
  }

  public move(x, y): Cube {
    super.move(x, y);
    this.object.style.left = (x * this.scale) + 'px';
    this.object.style.top = (y * this.scale * -1) + 'px';
    return this;
  }

}
