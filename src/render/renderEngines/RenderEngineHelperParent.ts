export default class RenderEngineHelperParent {

  protected _mode: string = '';
  protected _incrementors: object = {};
  protected _player = null;

  constructor(protected mode = '') {
  }

  public getMode() {
    return this._mode;
  }

  public getIncrementors() {
    return this._incrementors;
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
    return this._player;
  }

}
