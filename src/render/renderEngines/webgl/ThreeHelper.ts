// @ts-ignore
const THREE = window.THREE;

import RenderEngineHelper from './../RenderEngineHelper.js';
import colors from './../../colors.js';
import LevelHelper from './../../../levels/LevelHelper.js';
import globals from './../../../globals.js';

import Wall from './objects/Wall.js';
import Coin from './objects/Coin.js';
import Player from './objects/Player.js';
import Spikes from './objects/Spikes.js';
import Diamond from './objects/Diamond.js';

export default class ThreeHelper extends RenderEngineHelper {

  private scene = null;
  private camera = null;
  private renderer = null;
  private cameraCenter = null;
  protected incrementors = {
    camera: {
      x: null,
      y: null,
      z: null,
    }
  };

  public constructor() {
    super('3d');

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(colors['canvas-background']);
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.scene.add(this.camera);
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.cameraCenter = LevelHelper.getLevelCenter(globals.helpers.levelHelper.getCurrentLevel());
    this.incrementors = {
      camera: {
        x: this.cameraCenter.x,
        y: this.cameraCenter.y * -1,
        z: 15,
      },
    };
  }

  //* @OVERRIDE
  public render() {
    this.animateCameraPosition();
    this.renderer.render(this.scene, this.camera);
    return this;
  }

  //* @OVERRIDE
  public buildLevel(level = []) {
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
          this.player = block;
        }
        this.insertBlockIntoScene(block, {x, y});
      }
    }    
    return this;
  }

  //* @OVERRIDE
  public insertBlockIntoScene(block, pos) {
    let obj = null;
    if (block && block.getObject) {
      obj = block.getObject();
    }
    if (!obj) {return;}
    const x = pos.x;
    const y = pos.y * -1;
    
    this.scene.add(obj);
    block.setInitialPosition({x, y});
    obj.position.set(x, y, 0);
    
    block.tweakPosition && block.tweakPosition();
    return this;
  }

  public static getBlockByType(blockType = '') {
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

  //* @OVERRIDE
  public listenForCameraMovements() {
    let isMouseDown = false;
    let lastMousePos = {x: null, y: null};
  
    // WHEEL
    this.renderer.domElement.addEventListener('wheel', e => {
      isMouseDown = false;
      const scrollingUp = (e.deltaY < 0);
      if (scrollingUp) {
        if (this.incrementors.camera.z >= 2) {
          this.incrementors.camera.z -= 0.6;
        }
      } else {
        if (this.incrementors.camera.z <= 45) {
          this.incrementors.camera.z += 0.6;
        }
      }
    });
  
    // MOUSEDOWN
    this.renderer.domElement.addEventListener('mousedown', () => {
      isMouseDown = true
    });
  
    // MOUSUP
    this.renderer.domElement.addEventListener('mouseup', () => {
      isMouseDown = false
    });
  
    // lMOUSEMOVE
    this.renderer.domElement.addEventListener('mousemove', e => {
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
        if (this.incrementors.camera.x < 35) {
          this.incrementors.camera.x += 0.25;
        }
      } else if (movedToLeft) {
        if (this.incrementors.camera.x > -35) {
          this.incrementors.camera.x -= 0.25;
        }
      }
  
      lastMousePos = currentMousePos;
    });
    return this;
  }

  //* @OVERRIDE
  public animateCameraPosition() {
    this.camera.position.x = this.incrementors.camera.x;
    this.camera.position.y = this.incrementors.camera.y;
    this.camera.position.z = this.incrementors.camera.z;
    this.camera.lookAt(new THREE.Vector3(this.cameraCenter.x, this.cameraCenter.y * -1, 0));
    return this;
  }

  //* @OVERRIDE
  public clearScene() {
    while (this.scene.children.length > 0) {
      this.scene.remove(this.scene.children[0]);
    }
    return this;
  }

  //* @OVERRIDE
  public handleResize() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
    return this;
  }

}
