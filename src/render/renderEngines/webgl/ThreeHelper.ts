// @ts-ignore
const THREE = window.THREE;
import RenderEngineHelper from './../RenderEngineHelper.js';
import colors from './../../colors.js';
import LevelHelper from './../../../levels/LevelHelper.js';
import Globals from '../../../Globals.js';
import RenderObject from '../RenderObject.js';

export default class ThreeHelper extends RenderEngineHelper {

  private scene = null;
  private camera = null;
  private renderer = null;
  private cameraCenter = null;

  public constructor(domParent: HTMLElement) {
    super('3d');

    this.domParent = domParent;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(colors['canvas-background']);
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.scene.add(this.camera);
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setSize(this.domParent.clientWidth, this.domParent.clientHeight);
    this.domElement = this.renderer.domElement;
    domParent.appendChild(this.domElement);

    this.cameraCenter = LevelHelper.getLevelCenter(Globals.levelHelper.getCurrentLevel());
    this.incrementors = {
      camera: {
        x: this.cameraCenter.x,
        y: this.cameraCenter.y * -1,
        z: 15,
      },
    };
  }

  public render() {
    this.animateCameraPosition();
    this.renderer.render(this.scene, this.camera);
    return this;
  }

  public buildLevel(level: string[][] = []) {
    for (let y = 0; y < level.length; y++) {
      const row = level[y];
      for (let x = 0; x < row.length; x++) {
        const blockType = LevelHelper.getBlockTypeBySymbol(row[x]);
        const block = this.getRenderObject(blockType);

        this.setRenderObject(blockType, block);
        this.insertBlockIntoScene(block, {x, y});
      }
    }    
    return this;
  }

  protected insertBlockIntoScene(block: RenderObject, pos) {
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

    const mouseDown = () => {  
      isMouseDown = true;
    };

    const mouseUp = () => {
      isMouseDown = false;
    };

    const mouseMove = e => {
      if (!isMouseDown && e.type !== 'touchmove') return;

      const currentMousePos = (e.type === 'touchmove'
        ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
        : { x: e.x, y: e.y });

      if (!lastMousePos.x) {
        lastMousePos = currentMousePos;
      }

      if (lastMousePos.x < currentMousePos.x) {
        if (this.incrementors.camera.x < 35) {
          this.incrementors.camera.x += 0.25;
        }
      } else if (lastMousePos.x > currentMousePos.x) {
        if (this.incrementors.camera.x > -35) {
          this.incrementors.camera.x -= 0.25;
        }
      }
  
      lastMousePos = currentMousePos;
    };
  
    this.renderer.domElement.addEventListener('mousedown', mouseDown);
    this.renderer.domElement.addEventListener('touchdown', mouseDown);
    this.renderer.domElement.addEventListener('mouseup', mouseUp);
    this.renderer.domElement.addEventListener('touchup', mouseUp);
    this.renderer.domElement.addEventListener('mousemove', mouseMove);
    this.renderer.domElement.addEventListener('touchmove', mouseMove);
    return this;
  }

  public animateCameraPosition() {
    this.camera.position.x = this.incrementors.camera.x;
    this.camera.position.y = this.incrementors.camera.y;
    this.camera.position.z = this.incrementors.camera.z;
    this.camera.lookAt(new THREE.Vector3(this.cameraCenter.x, this.cameraCenter.y * -1, 0));
    return this;
  }

  public clearScene() {
    while (this.scene.children.length > 0) {
      this.scene.remove(this.scene.children[0]);
    }
    return this;
  }

  public handleResize() {
    window.addEventListener('resize', () => {
      this.camera.aspect = this.domParent.clientWidth / this.domParent.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.domParent.clientWidth, this.domParent.clientHeight);
    });
    return this;
  }

}
