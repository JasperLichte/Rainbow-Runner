import Element from '../interfaces/Element.js';
import RenderEngineHelper from './renderEngines/RenderEngineHelper.js';
import RenderHelper from './RenderHelper.js';
import globals from '../globals/globals.js';
import Level from '../logic/Level.js';
import CurrentLevelPanel from '../ui/CurrentLevelPanel.js';

export default class AnimationLoop {

  private engineHelper: RenderEngineHelper;
  private totalFrames: number = 0;
  private lastUpdatedTime: number;
  private timeElapsedSinceLastFrame: number = 0;
  private movingElements: Element[];
  private rotatingElements: Element[];
  private currentLevelPanel: CurrentLevelPanel;
  private static running: boolean = false;

  public constructor(engineHelper: RenderEngineHelper, level: string[][]) {
    this.engineHelper = engineHelper;
    this.currentLevelPanel = new CurrentLevelPanel();
    this.prepare(level);
    this.movingElements = RenderHelper.getMovingElements(this.engineHelper);
    this.rotatingElements = RenderHelper.getRotatingElements(this.engineHelper);
  }

  private prepare(level: string[][]) {
    this.engineHelper
      .clearScene()
      .buildLevel(level)
      .listenForCameraMovements()
      .handleResize();

    globals.helpers.levelLogic = new Level(level);
    this.currentLevelPanel.listenForEvents();

    this.setLastUpdated();
  }

  public update() {
    this.engineHelper.render();
    if (!AnimationLoop.isRunning()) return;

    this.setTimeElapsed();
    this.moveElements();
    this.rotateElements();
    this.totalFrames % 10 === 0 && this.currentLevelPanel.updateFpsCounter(this.getFps());
    this.totalFrames++;
  }

  private setLastUpdated() {
    this.lastUpdatedTime = (new Date).getTime();  
  }

  private getFps() {
    return ~~(1000 / this.timeElapsedSinceLastFrame);
  }

  private setTimeElapsed() {
    const last = this.lastUpdatedTime;
    this.setLastUpdated();
    this.timeElapsedSinceLastFrame = this.lastUpdatedTime - last;
  }

  private moveElements(): void {
    for (var i = 0, len = this.movingElements.length; i < len; i++) {
      this.movingElements[i].object.move(this.movingElements[i].logic.getPosition());
    }
  }

  private rotateElements(): void {
    for (var i = 0, len = this.rotatingElements.length; i < len; i++) {
      this.rotatingElements[i].object.rotate();
    }
  }

  public static isRunning() {
    return AnimationLoop.running
  }

  public static stop() {
    AnimationLoop.running = false;
  }

  public static start() {
    AnimationLoop.running = true;
  }

}
