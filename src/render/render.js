import Player from './../logic/Player.js';

export default (helper, level) => {  
  helper
    .clearScene()
    .buildLevel(level);

  const playerObject = helper.getPlayer();
  const playerLogic = new Player(playerObject);

  (function animate() {
    // ======= ANIMATION LOOP ==========

    // =================================
    helper.render();
    requestAnimationFrame(animate);
  })();
}
