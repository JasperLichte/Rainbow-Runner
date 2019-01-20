import Player from './../logic/Player.js';

export default (helper, level) => {  
  helper
    .clearScene()
    .buildLevel(level);

  const playerObject = helper.getPlayer();
  const playerLogic = new Player(playerObject);

  (function animate() {
    // ======= ANIMATION LOOP ==========

    playerObject.move(playerLogic.getPosition().x, playerLogic.getPosition().y);
    // =================================
    helper.render();
    requestAnimationFrame(animate);
  })();
}
