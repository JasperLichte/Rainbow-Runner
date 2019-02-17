import CurrentLevelPanel from './../ui/CurrentLevelPanel.js';
import Player from './../logic/Player.js';
import RenderEngineHelper from './renderEngines/RenderEngineHelper.js';

export default (engineHelper: RenderEngineHelper, level: string[][]) => {
  (new CurrentLevelPanel()).listenForEvents();

  engineHelper
    .clearScene()
    .buildLevel(level)
    .listenForCameraMovements()
    .handleResize();

  const playerObject = engineHelper.getPlayer();
  const playerLogic = new Player(playerObject.getInitialPosition());

  (function animate() {
    // ======= ANIMATION LOOP ==========
    

    const { x, y } = playerLogic.getPosition();
    playerObject.move({x, y});
    // =================================
    engineHelper.render();
    requestAnimationFrame(animate);
  })();
}
