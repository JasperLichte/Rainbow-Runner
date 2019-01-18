export default (threeHelper, level) => {

  const incrementors = threeHelper.getIncrementors();
  const scene = threeHelper.getScene();
  const camera = threeHelper.getCamera();
  const renderer = threeHelper.getRenderer();
  let player = threeHelper.getPlayer();

  threeHelper
    .clearScene()
    .buildLevel(level)
    .listenForCameraMovements();

  (function animate() {
    if (!player) {
      player = threeHelper.getPlayer();
    }
    // ======= ANIMATION LOOP ==========

    threeHelper.animateCameraPosition();
    // =================================
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  })();
}
