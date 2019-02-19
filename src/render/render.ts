import CurrentLevelPanel from './../ui/CurrentLevelPanel.js';
import RenderEngineHelper from './renderEngines/RenderEngineHelper.js';
import globals from '../globals.js';
import Level from '../logic/Level.js';
import Element from '../interfaces/Element.js';
import RenderHelper from './RenderHelper.js';

export default (engineHelper: RenderEngineHelper, level: string[][]) => {

  (new CurrentLevelPanel()).listenForEvents();

  globals.helpers.levelLogic = new Level(level);

  engineHelper
    .clearScene()
    .buildLevel(level)
    .listenForCameraMovements()
    .handleResize();

  const movingElements = RenderHelper.buildMovingElementsArray(engineHelper);

  (function animate() {
    // ======= ANIMATION LOOP ==========

    moveElements(movingElements);
    // =================================
    engineHelper.render();
    requestAnimationFrame(animate);
  })();

  function moveElements(elements: Element[]): void {
    for (var i = 0, len = elements.length; i < len; i++) {
      elements[i].object.move(elements[i].logic.getPosition());
    }
  }

}
