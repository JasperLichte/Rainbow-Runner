const THREE = window.THREE;
import LevelHelper from './../../levels/LevelHelper.js';
import Wall from './objects/Wall.js';

export default class ThreeHelper {

  constructor() {    
    this._scene = new THREE.Scene();
    this._scene.background = new THREE.Color(0xeeeeee);

    this._camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this._scene.add(this._camera);

    this._renderer = new THREE.WebGLRenderer({antialias: true});
    this._renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', _ => {
      this._renderer.setSize(window.innerWidth, window.innerHeight);
    });
    document.body.appendChild(this._renderer.domElement);

    //--------------
    this.getScene = this.getScene.bind(this);
    this.getRenderer = this.getRenderer.bind(this);
    this.buildLevel = this.buildLevel.bind(this);
    this.insertBlockIntoScene = this.insertBlockIntoScene.bind(this);
    //--------------
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
          this.insertBlockIntoScene(block, {x, y});
        }
      }
    }
  }

  insertBlockIntoScene(block, pos) {
    if (!block) {return;}
    const x = pos.x - 11.5;
    const y = pos.y * -1 + 8;
    
    this._scene.add(block);
    block.position.set(x, y, 0);
  }

  static getBlockByType(blockType = '') {
    let obj = null;
    switch(blockType) {
      case 'wall':
        obj =  new Wall();
    }

    if (obj && obj.getCube) {
      return obj.getCube();
    }
    return null;
  }

}
