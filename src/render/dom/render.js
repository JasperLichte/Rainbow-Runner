export default (domHelper, level) => {

  const incrementors = domHelper.getIncrementors();

  domHelper
    .clearScene()
    .buildLevel(level);

  (function animate() {
    // ======= ANIMATION LOOP ==========


    //animateBackgroundColors();
    // =================================
    requestAnimationFrame(animate);
  })();

  // ###########################################################################
  // ============================== FUNCTIONS ==================================
  // ########################################################################### 

}
