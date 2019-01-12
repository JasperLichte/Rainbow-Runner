const THREE = window.THREE;
import ThreeHelper from './ThreeHelper.js';

export default level => {
  let incrementors = {
    camera: {
      x: 0,
      y: 0,
      z: 10,
    }
  };

  const threeHelper = new ThreeHelper();

  const scene = threeHelper.getScene();
  const camera = threeHelper.getCamera();
  const renderer = threeHelper.getRenderer();

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  scene.add( directionalLight );

  threeHelper.buildLevel(level);

  const animate = _ => {
    //------- ANIMATION LOOP ----------
    
    
    
    animateCameraPosition();
    //---------------------------------
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();

  function animateCameraPosition() {
    camera.position.x = Math.cos(incrementors.camera.x) * -10;
    camera.position.y = Math.sin(incrementors.camera.y) * 5;
    camera.position.z = incrementors.camera.z;
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    incrementors.camera.x += 0.001;
    incrementors.camera.y += 0.00125;
  }

}