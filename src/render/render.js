import Player from './../logic/Player.js';

export default (helper, level) => {  
  helper
    .clearScene()
    .buildLevel(level);

  const playerObject = helper.getPlayer();
  const playerLogic = new Player(playerObject.getInitialPosition());

  (function animate() {
    // ======= ANIMATION LOOP ==========

    const playerPosition = playerLogic.getPosition();
    playerObject.move(playerPosition.x, playerPosition.y);
    // =================================
    helper.render();
    requestAnimationFrame(animate);
  })();
}
