const THREE = window.THREE;

export default (threeHelper, level) => {

  const incrementors = threeHelper.getIncrementors();
  const scene = threeHelper.getScene();
  const camera = threeHelper.getCamera();
  const renderer = threeHelper.getRenderer();

  threeHelper
    .clearScene()
    .buildLevel(level)
    .listenForCameraMovements();

  (function animate() {
    // ======= ANIMATION LOOP ==========


    //animateBackgroundColors();
    threeHelper.animateCameraPosition();
    // =================================
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  })();

  // ###########################################################################
  // ============================== FUNCTIONS ==================================
  // ###########################################################################  
  function animateBackgroundColors() {
    const color = scene.background;
    if (color.r >= 1 || color.r <= 0) {
      incrementors.background.rDir = !incrementors.background.rDir;
    }
    if (color.g >= 1 || color.g <= 0) {
      incrementors.background.gDir = !incrementors.background.gDir;
    }
    if (color.b >= 1 || color.b <= 0) {
      incrementors.background.bDir = !incrementors.background.bDir;
    }
  
    color.r += (incrementors.background.rDir ? 0.004 : -0.004);
    color.g += (incrementors.background.gDir ? 0.003 : -0.003);
    color.b += (incrementors.background.bDir ? 0.0015 : -0.0015);
    scene.background = color;
  }

}
