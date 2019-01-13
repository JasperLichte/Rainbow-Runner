const THREE = window.THREE;

import colors from './colors.js';
import LevelHelper from './../../levels/LevelHelper.js';
import Wall from './objects/Wall.js';
import Coin from './objects/Coin.js';

export default class ThreeHelper {

  constructor() {    
    this._scene = new THREE.Scene();
    this._scene.background = new THREE.Color(new THREE.Color(colors.background));

    this._camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this._scene.add(this._camera);

    this._renderer = new THREE.WebGLRenderer({antialias: true});
    this._renderer.setSize(window.innerWidth, window.innerHeight);
    window.addEventListener('resize', _ => this._renderer.setSize(window.innerWidth, window.innerHeight));
    document.body.appendChild(this._renderer.domElement);

    this._incrementors = {
      camera: {
        x: 0,
        y: 5,
        z: 10,
      },
    };

    //--------------
    this.getScene = this.getScene.bind(this);
    this.getRenderer = this.getRenderer.bind(this);
    this.buildLevel = this.buildLevel.bind(this);
    this.insertBlockIntoScene = this.insertBlockIntoScene.bind(this);
    this.listenForCameraMovements = this.listenForCameraMovements.bind(this);
    this.animateCameraPosition = this.animateCameraPosition.bind(this);
    this.clearScene = this.clearScene.bind(this);
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

  getIncrementors() {
    return this._incrementors;
  }

  buildLevel(level = []) {
    if (!Array.isArray(level)) {
      return;
    }
    let blocks = [];
    for (let y = 0; y < level.length; y++) {
      const row = level[y];
      if (!Array.isArray(row)) {
        return;
      }
      for (let x = 0; x < row.length; x++) {
        const blockType = LevelHelper.getBlockTypeBySymbol(row[x]);
        const block = ThreeHelper.getBlockByType(blockType);
        block && blocks.push({block, pos: {x, y}});
      }
    }

    function shuffle(array) {
      let counter = array.length;
      while (counter > 0) {
          let index = Math.floor(Math.random() * counter);
          counter--;
          let temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
      }  
      return array;
    }

    blocks = shuffle(blocks);
    let i = 0;
    const interval = setInterval(_ => {
      if (i >= blocks.length) {
        clearInterval(interval);
        return;
      }
      const { block, pos } = blocks[i++];
      this.insertBlockIntoScene(block, pos);
    }, 35);
    
    return this;
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
        break;
      case 'coin':
        obj = new Coin();
        break;
    }

    if (obj && obj.getObject) {
      return obj.getObject();
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
        if (this._incrementors.camera.z >= 5) {
          this._incrementors.camera.z -= 0.6;
        }
      } else {
        if (this._incrementors.camera.z <= 35) {
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
        if (this._incrementors.camera.x < 17.5) {
          this._incrementors.camera.x += 0.25;
        }
      } else if (movedToLeft) {
        if (this._incrementors.camera.x > -17.5) {
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
    this._camera.lookAt(new THREE.Vector3(0, 0, 0));
  }

  clearScene() {
    while (this._scene.children.length > 0) {
      this._scene.remove(this._scene.children[0]);
    }
    return this;
  }

}
