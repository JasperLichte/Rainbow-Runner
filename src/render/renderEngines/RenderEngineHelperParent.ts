export default class RenderEngineHelperParent {

  protected mode: string = '';
  protected incrementors: object = {};
  protected player = null;

  constructor(_mode = '') {
    this.mode = _mode;
  }

  public getMode() {
    return this.mode;
  }

  public getIncrementors() {
    return this.incrementors;
  }

  public render() {
    return this;
  }

  public buildLevel(level = []) {
    return this;
  }

  public insertBlockIntoScene(block, pos) {
    return this;
  }

  public listenForCameraMovements() {
    return this;
  }

  public animateCameraPosition() {
    return this;
  }

  public clearScene() {
    return this;
  }

  public handleResize() {
    return this;
  }

  public getPlayer() {
    return this.player;
  }

}
