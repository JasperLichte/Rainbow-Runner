import RenderEngineHelper from '../RenderEngineHelper.js';
import LevelHelper from '../../../levels/LevelHelper.js';
import RenderObject from '../RenderObject.js';
import Position from '../../../interfaces/Position.js';
import colors from '../../colors.js';
import DomHelper from '../../../helpers/DomHelper.js';

export default class DomEngineHelper extends RenderEngineHelper {

  public constructor(domParent: HTMLElement) {
    super('2d');

    this.domParent = domParent;
    this.domElement = this.buildDomElement();
    this.setCSSRules();
    this.domParent.appendChild(this.domElement);
  }

  private buildDomElement(): HTMLElement {
    const el = document.createElement('div');
    el.setAttribute('class', 'dom-engine-wrapper');
    return el;
  }

  public clearScene(): DomEngineHelper {
    this.domElement.innerHTML = '';
    return this;
  }

  public render(): DomEngineHelper {
    this.animateCameraPosition();
    return this;
  }

  public buildLevel(level: string[][]): DomEngineHelper {
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

  protected insertBlockIntoScene(block: RenderObject, pos: Position): DomEngineHelper {
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

  private setCSSRules() {
    const parentElClass = this.domElement.getAttribute('class');
    const styles = [];
    for (const block of LevelHelper.getBlockTypes()) {
      const key = `objects-${block}`;
      if (!(colors[key])) continue;
      styles.push(`.${parentElClass} .${block} { background-color: ${colors[key]}; }` + "\n");
    }

    DomHelper.insertAsFirst(
      DomHelper.head(),
      DomHelper.element('style')({'type': 'text/css'})(styles.join(''))
    );
  }

}
