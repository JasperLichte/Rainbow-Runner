export default (helper, level) => {
  
  helper
    .clearScene()
    .buildLevel(level);

  const incrementors = helper.getIncrementors();  
  const player = helper.getPlayer();

  (function animate() {
    // ======= ANIMATION LOOP ==========    

    helper
      .animateCameraPosition()
      .render();
    // =================================
    requestAnimationFrame(animate);
  })();
}
