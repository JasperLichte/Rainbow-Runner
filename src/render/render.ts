import RenderEngineHelper from './renderEngines/RenderEngineHelper.js';
import AnimationLoop from './AnimationLoop.js';

export default (engineHelper: RenderEngineHelper, level: string[][]) => {

  const animationLoopHelper = new AnimationLoop(engineHelper, level);
  AnimationLoop.start();
  (function animate() {
    animationLoopHelper.update();

    requestAnimationFrame(animate);
  })();
}
