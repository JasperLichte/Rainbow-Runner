import CurrentLevelPanel from './../ui/CurrentLevelPanel.js';
import Player from './../logic/Player.js';
import RenderEngineHelperParent from './renderEngines/RenderEngineHelperParent.js';

export default (engineHelper: RenderEngineHelperParent, level: string[][]) => {
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
    

    const playerPosition = playerLogic.getPosition();
    playerObject.move(playerPosition.x, playerPosition.y);
    // =================================
    engineHelper.render();
    requestAnimationFrame(animate);
  })();
}
