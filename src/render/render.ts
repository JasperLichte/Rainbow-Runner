import CurrentLevelPanel from './../ui/CurrentLevelPanel.js';
import Player from '../logic/objects/Player.js';
import RenderEngineHelper from './renderEngines/RenderEngineHelper.js';
import globals from '../globals.js';
import Level from '../logic/Level.js';
import RenderObject from './renderEngines/RenderObject.js';

export default (engineHelper: RenderEngineHelper, level: string[][]) => {
  (new CurrentLevelPanel()).listenForEvents();

  globals.helpers.levelLogic = new Level(level);

  engineHelper
    .clearScene()
    .buildLevel(level)
    .listenForCameraMovements()
    .handleResize();

  const player: { object: RenderObject, logic: Player } = {
    object: engineHelper.getPlayer(),
    logic: new Player(engineHelper.getPlayer().getInitialPosition())
  };

  (function animate() {
    // ======= ANIMATION LOOP ==========

    player.object.move(player.logic.getPosition());
    // =================================
    engineHelper.render();
    requestAnimationFrame(animate);
  })();
}
