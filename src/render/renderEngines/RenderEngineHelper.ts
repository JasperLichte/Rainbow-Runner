import RenderObject from './RenderObject.js';

export default class RenderEngineHelper {

  protected mode: string = '';
  protected incrementors: object = {};
  protected player = null;

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

  public insertBlockIntoScene(block, pos): RenderEngineHelper {
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

}
