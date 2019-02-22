import RenderEngineHelper from './renderEngines/RenderEngineHelper.js';
import AnimationLoopHelper from './AnimationLoopHelper.js';

export default (engineHelper: RenderEngineHelper, level: string[][]) => {

  const animationLoopHelper = new AnimationLoopHelper(engineHelper, level);
  (function animate() {
    animationLoopHelper.update();

    requestAnimationFrame(animate);
  })();
}
