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
    

    const playerPosition = playerLogic.getPosition();
    playerObject.move({x: playerPosition.x, y: playerPosition.y});
    // =================================
    engineHelper.render();
    requestAnimationFrame(animate);
  })();
}
