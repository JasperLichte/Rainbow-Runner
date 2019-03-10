import RenderEngineHelper from './../RenderEngineHelper.js';
import LevelHelper from './../../../levels/LevelHelper.js';
import RenderObject from '../RenderObject.js';
import Position from '../../../interfaces/Position.js';

export default class DomHelper extends RenderEngineHelper {

  private domParent: HTMLElement;
  private domElement: HTMLElement;

  public constructor(domParent: HTMLElement) {
    super('2d');

    this.domParent = domParent;
    this.domElement = this.buildDomElement();
    this.domParent.appendChild(this.domElement);
  }

  private buildDomElement(): HTMLElement {
    const el = document.createElement('div');
    el.setAttribute('class', 'dom-engine-wrapper');
    return el;
  }

  public clearScene(): DomHelper {
    this.domElement.innerHTML = '';
    return this;
  }

  public render(): DomHelper {
    this.animateCameraPosition();
    return this;
  }

  public buildLevel(level: string[][]): DomHelper {
    for (let y = 0; y < level.length; y++) {
      const row = level[y];
      for (let x = 0; x < row.length; x++) {
        const blockType = LevelHelper.getBlockTypeBySymbol(row[x]);
        const block = this.getRenderObject(blockType);
        
        this.setRenderObject(blockType, block);
        this.insertBlockIntoScene(block, {x, y});
      }
    }
    return this;
  }

  protected insertBlockIntoScene(block: RenderObject, pos: Position): DomHelper {
    let obj = null;
    if (block && block.getObject) {
      obj = block.getObject();
    }
    if (!obj) {return;}
    const x = pos.x;
    const y = pos.y * -1;

    this.domElement.appendChild(obj);
    block && block.setInitialPosition({x, y}, true);
    return this;
  }

}
