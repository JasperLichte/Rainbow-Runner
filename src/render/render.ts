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
    for (let i = elements.length - 1; i >= 0; i--) {
      elements[i].object.move(elements[i].logic.getPosition());
    }
  }

}
