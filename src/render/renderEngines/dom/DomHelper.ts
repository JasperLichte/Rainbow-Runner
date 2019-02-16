import RenderEngineHelperParent from './../RenderEngineHelperParent.js';
import LevelHelper from './../../../levels/LevelHelper.js';
import Wall from './objects/Wall.js';
import Player from './objects/Player.js';
import Coin from './objects/Coin.js';
import Spikes from './objects/Spikes.js';
import Diamond from './objects/Diamond.js';

export default class DomHelper extends RenderEngineHelperParent {

  private domParent;
  private domElement;

  public constructor(domParent) {
    super('2d');

    this.domParent = domParent ? domParent : document.body;
    this.domElement = this.buildDomElement();
    this.domParent.appendChild(this.domElement);
  }

  private buildDomElement() {
    const el = document.createElement('div');
    el.setAttribute('class', 'dom-engine-wrapper');
    return el;
  }

  //* @OVERRIDE
  public clearScene() {
    this.domElement.innerHTML = '';
    return this;
  }

  //* @OVERRIDE
  public render() {
    this.animateCameraPosition();
    return this;
  }

  //* @OVERRIDE
  public buildLevel(level) {
    if (!(Array.isArray(level))) {
      return;
    }
    for (let y = 0; y < level.length; y++) {
      const row = level[y];
      if (!(Array.isArray(row))) {
        return;
      }
      for (let x = 0; x < row.length; x++) {
        const blockType = LevelHelper.getBlockTypeBySymbol(row[x]);
        const block = DomHelper.getBlockByType(blockType);
        this.insertBlockIntoScene(block, {x, y});

        if (blockType === 'player' && block) {
          this.player = block;
        }
      }
    }
    return this;
  }

  //* @OVERRIDE
  public insertBlockIntoScene(block, pos) {
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

  public static getBlockByType(blockType = '') {
    switch(blockType) {
      case 'wall':
        return new Wall();
      case 'player':
        return new Player();
      case 'coin':
        return new Coin();
      case 'spikes':
        return new Spikes();
      case 'diamond':
        return new Diamond();
    }
    return null;
  }

}
