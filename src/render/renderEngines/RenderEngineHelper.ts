import RenderObject from './RenderObject.js';
import Position from '../../interfaces/Position.js';
import RenderObjectFactory from './RenderObjectFactory.js';

export default class RenderEngineHelper {

  protected mode: string = '';
  protected incrementors: object = {};
  protected player:   RenderObject = null;
  protected walls:    RenderObject[] = [];
  protected coins:    RenderObject[] = [];
  protected diamonds: RenderObject[] = [];
  protected spikes:   RenderObject[] = [];

  constructor(_mode: string = '') {
    this.mode = _mode;
  }

  public getMode(): string {
    return this.mode;
  }

  public getIncrementors() {
    return this.incrementors;
  }

  public render(): RenderEngineHelper {
    return this;
  }

  public buildLevel(level: string[][] = []): RenderEngineHelper {
    return this;
  }

  public insertBlockIntoScene(block: RenderObject, pos: Position): RenderEngineHelper {
    return this;
  }

  public listenForCameraMovements(): RenderEngineHelper {
    return this;
  }

  public animateCameraPosition(): RenderEngineHelper {
    return this;
  }

  public clearScene(): RenderEngineHelper {
    return this;
  }

  public handleResize(): RenderEngineHelper {
    return this;
  }

  public getPlayer(): RenderObject {
    return this.player;
  }

  public getWalls(): RenderObject[] {
    return this.walls;
  }

  public getCoins(): RenderObject[] {
    return this.coins;
  }

  public getDiamonds(): RenderObject[] {
    return this.diamonds;
  }

  public getSpikes(): RenderObject[] {
    return this.spikes;
  }

  protected getRenderObject(blockType: string): RenderObject {
    return RenderObjectFactory.getObject(this.mode, blockType);
  }

  protected setRenderObject(type: string = '', renderObject: RenderObject): void {
    switch(type) {
      case 'player':
        this.player = renderObject;
        break;
      case 'wall':
        this.walls.push(renderObject);
        break;
      case 'coin':
        this.coins.push(renderObject);
        break;
      case 'diamond':
        this.diamonds.push(renderObject);
        break;
      case 'spikes':
        this.spikes.push(renderObject);
        break;
    }
  }

}
