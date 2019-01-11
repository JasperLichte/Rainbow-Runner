const THREE = window.THREE;
import LevelHelper from './../../levels/LevelHelper.js';
import Wall from './objects/Wall.js';

export default class ThreeHelper {

  constructor(domParent) {
    if (!domParent) {
      domParent = document.body;
    }
    this._domParent = domParent;
    
    this._scene = new THREE.Scene();

    this._camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this._scene.add(this._camera);

    this._renderer = new THREE.WebGLRenderer();

    //--------------
    this.getScene = this.getScene.bind(this);
    this.getRenderer = this.getRenderer.bind(this);
    this.appendRendererToDom = this.appendRendererToDom.bind(this);
    this.buildLevel = this.buildLevel.bind(this);
    this.insertBlockIntoScene = this.insertBlockIntoScene.bind(this);
    //--------------

    this.appendRendererToDom();
  }

  getScene() {
    return this._scene;
  }

  getRenderer() {
    return this._renderer;
  }

  getCamera() {
    return this._camera;
  }

  appendRendererToDom() {
    this._renderer.setSize(window.innerWidth, window.innerHeight);
    this._domParent.appendChild(this._renderer.domElement);
  }

  buildLevel(level = []) {
    if (!Array.isArray(level)) {
      return;
    }
    for (let y = 0; y < level.length; y++) {
      const row = level[y];
      if (!Array.isArray(row)) {
        return;
      }
      for (let x = 0; x < row.length; x++) {
        const blockType = LevelHelper.getBlockTypeBySymbol(row[x]);
        const block = ThreeHelper.getBlockByType(blockType);
        if (block) {
          this.insertBlockIntoScene(block);
        }
      }
    }
  }

  insertBlockIntoScene(block) {
    if (!block) {return;}

    this._scene.add(block.getCube());
  }

  static getBlockByType(blockType = '') {
    switch(blockType) {
      case 'wall':
        return new Wall();
    }
    return null;
  }

}
