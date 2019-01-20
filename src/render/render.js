import Player from './../logic/Player.js';

export default (helper, level) => {  
  helper
    .clearScene()
    .buildLevel(level);

  const playerLogic = new Player(helper.getPlayer());

  (function animate() {
    // ======= ANIMATION LOOP ==========    

    // =================================
    helper.render();
    requestAnimationFrame(animate);
  })();
}
