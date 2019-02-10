export default class RenderEngineHelper {

  constructor(mode = '') {

    this._mode = mode;
    this._incrementors = {};
    this._player = null;

    // ----------------
    this.getMode = this.getMode.bind(this);
    this.getIncrementors = this.getIncrementors.bind(this);
    this.render = this.render.bind(this);
    this.buildLevel = this.buildLevel.bind(this);
    this.insertBlockIntoScene = this.insertBlockIntoScene.bind(this);
    this.listenForCameraMovements = this.listenForCameraMovements.bind(this);
    this.animateCameraPosition = this.animateCameraPosition.bind(this);
    this.clearScene = this.clearScene.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.getPlayer = this.getPlayer.bind(this);
  }

  getMode() {
    return this._mode;
  }

  getIncrementors() {
    return this._incrementors;
  }

  render() {
    return this;
  }

  buildLevel(level = []) {
    return this;
  }

  insertBlockIntoScene() {}

  listenForCameraMovements() {
    return this;
  }

  animateCameraPosition() {
    return this;
  }

  clearScene() {
    return this;
  }

  handleResize() {
    return this;
  }

  getPlayer() {
    return this._player;
  }

}
