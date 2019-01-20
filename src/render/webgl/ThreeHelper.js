const THREE = window.THREE;

import colors from './../colors.js';
import LevelHelper from './../../levels/LevelHelper.js';
import Wall from './objects/Wall.js';
import Coin from './objects/Coin.js';
import Player from './objects/Player.js';
import Spikes from './objects/Spikes.js';
import Diamond from './objects/Diamond.js';
export default class ThreeHelper {

  constructor() {    
    this._scene = new THREE.Scene();
    this._scene.background = new THREE.Color(colors['canvas-background']);

    this._camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this._scene.add(this._camera);

    this._renderer = new THREE.WebGLRenderer({antialias: true});
    this._renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this._renderer.domElement);

    this._incrementors = {
      camera: {
        x: 11.5,
        y: 5,
        z: 15,
      },
    };

    this._player = null;

    //--------------
    this.getScene = this.getScene.bind(this);
    this.getRenderer = this.getRenderer.bind(this);
    this.getIncrementors = this.getIncrementors.bind(this);
    this.render = this.render.bind(this);
    this.buildLevel = this.buildLevel.bind(this);
    this.insertBlockIntoScene = this.insertBlockIntoScene.bind(this);
    this.listenForCameraMovements = this.listenForCameraMovements.bind(this);
    this.animateCameraPosition = this.animateCameraPosition.bind(this);
    this.clearScene = this.clearScene.bind(this);
    this._handleResize = this._handleResize.bind(this);
    this.getPlayer = this.getPlayer.bind(this);
    //--------------

    this._handleResize();
    this.listenForCameraMovements();
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

  getIncrementors() {
    return this._incrementors;
  }

  render() {
    this.animateCameraPosition();
    this._renderer.render(this._scene, this._camera);
    return this;
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
        
        if (blockType === 'player' && block) {
          this._player = block;
        }
        this.insertBlockIntoScene(block, {x, y});
      }
    }    
    return this;
  }

  insertBlockIntoScene(block, pos) {
    let obj = null;
    if (block && block.getObject) {
      obj = block.getObject();
    }
    if (!obj) {return;}
    const x = pos.x;
    const y = pos.y * -1;
    
    this._scene.add(obj);
    block.setInitialPosition({x, y});
    obj.position.set(x, y, 0);
    
    block.tweakPosition && block.tweakPosition();
  }

  static getBlockByType(blockType = '') {
    switch(blockType) {
      case 'wall':
        return new Wall();
        break;
      case 'coin':
        return new Coin();
        break;
      case 'player':
        return new Player();
        break;
      case 'spikes':
        return new Spikes();
        break;  
      case 'diamond':
        return new Diamond();
        break;
    }
    return null;
  }

  listenForCameraMovements() {
    let isMouseDown = false;
    let lastMousePos = {};
  
    // WHEEL
    this._renderer.domElement.addEventListener('wheel', e => {
      isMouseDown = false;
      const scrollingUp = (e.deltaY < 0);
      if (scrollingUp) {
        if (this._incrementors.camera.z >= 2) {
          this._incrementors.camera.z -= 0.6;
        }
      } else {
        if (this._incrementors.camera.z <= 45) {
          this._incrementors.camera.z += 0.6;
        }
      }
    });
  
    // MOUSEDOWN
    this._renderer.domElement.addEventListener('mousedown', _ => {
      isMouseDown = true
    });
  
    // MOUSUP
    this._renderer.domElement.addEventListener('mouseup', _ => {
      isMouseDown = false
    });
  
    // lMOUSEMOVE
    this._renderer.domElement.addEventListener('mousemove', e => {
      if (!isMouseDown) {
        return;
      }
      if (!lastMousePos.x) {
        lastMousePos = {
          x: e.x,
          y: e.y
        }
      }
      const currentMousePos = {
        x: e.x,
        y: e.y
      }
      const movedToRight = (lastMousePos.x < currentMousePos.x);
      const movedToLeft = (lastMousePos.x > currentMousePos.x);
      if (movedToRight) {
        if (this._incrementors.camera.x < 35) {
          this._incrementors.camera.x += 0.25;
        }
      } else if (movedToLeft) {
        if (this._incrementors.camera.x > -35) {
          this._incrementors.camera.x -= 0.25;
        }
      }
  
      lastMousePos = currentMousePos;
    });
    return this;
  }

  animateCameraPosition() {
    this._camera.position.x = this._incrementors.camera.x;
    this._camera.position.y = this._incrementors.camera.y;
    this._camera.position.z = this._incrementors.camera.z;
    this._camera.lookAt(new THREE.Vector3(11.5, 0, 0));
    return this;
  }

  clearScene() {
    while (this._scene.children.length > 0) {
      this._scene.remove(this._scene.children[0]);
    }
    return this;
  }

  _handleResize() {
    window.addEventListener('resize', _ => {
      this._camera.aspect = window.innerWidth / window.innerHeight;
      this._camera.updateProjectionMatrix();
      this._renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  getPlayer() {
    return this._player;
  }

}
