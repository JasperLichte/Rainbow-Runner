import RenderEngineHelper from './renderEngines/RenderEngineHelper.js';
import AnimationLoop from './AnimationLoop.js';

export default (engineHelper: RenderEngineHelper, level: string[][]) => {

  const animationLoop = new AnimationLoop(engineHelper, level);
  AnimationLoop.start();
  (function animate() {
    animationLoop.update();

    requestAnimationFrame(animate);
  })();
}
