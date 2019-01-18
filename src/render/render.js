export default (helper, level) => {

  const incrementors = helper.getIncrementors();  
  let player = helper.getPlayer();

  helper
    .clearScene()
    .buildLevel(level);

  (function animate() {
    // ======= ANIMATION LOOP ==========
    if (!player) {
      player = helper.getPlayer();
    }
    

    helper
      .animateCameraPosition()
      .render();
    // =================================
    requestAnimationFrame(animate);
  })();
}
