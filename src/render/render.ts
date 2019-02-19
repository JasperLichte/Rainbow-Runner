import CurrentLevelPanel from './../ui/CurrentLevelPanel.js';
import RenderEngineHelper from './renderEngines/RenderEngineHelper.js';
import globals from '../globals.js';
import Level from '../logic/Level.js';
import RenderHelper from './RenderHelper.js';
import { moveElements, rotateElements } from './animationLoopFuncs.js';

export default (engineHelper: RenderEngineHelper, level: string[][]) => {

  (new CurrentLevelPanel()).listenForEvents();

  globals.helpers.levelLogic = new Level(level);

  engineHelper
    .clearScene()
    .buildLevel(level)
    .listenForCameraMovements()
    .handleResize();

  const movingElements = RenderHelper.buildMovingElementsArray(engineHelper);
  const rotatingElements = RenderHelper.buildRotatingElementsArray(engineHelper);

  (function animate() {
    // ======== ANIMATION LOOP ==========

    moveElements(movingElements);
    rotateElements(rotatingElements);
    // ==================================
    engineHelper.render();
    requestAnimationFrame(animate);
  })();
}
