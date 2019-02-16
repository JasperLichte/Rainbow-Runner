import RenderObject from './RenderObject.js';

export default class RenderEngineHelperParent {

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

  public render(): RenderEngineHelperParent {
    return this;
  }

  public buildLevel(level: string[][] = []): RenderEngineHelperParent {
    return this;
  }

  public insertBlockIntoScene(block, pos): RenderEngineHelperParent {
    return this;
  }

  public listenForCameraMovements(): RenderEngineHelperParent {
    return this;
  }

  public animateCameraPosition(): RenderEngineHelperParent {
    return this;
  }

  public clearScene(): RenderEngineHelperParent {
    return this;
  }

  public handleResize(): RenderEngineHelperParent {
    return this;
  }

  public getPlayer(): RenderObject {
    return this.player;
  }

}
