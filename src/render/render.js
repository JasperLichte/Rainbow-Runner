export default (helper, level) => {  
  helper
    .clearScene()
    .buildLevel(level);

  (function animate() {
    // ======= ANIMATION LOOP ==========    

    helper
      .animateCameraPosition()
      .render();
    // =================================
    requestAnimationFrame(animate);
  })();
}
