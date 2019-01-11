export default (threeHelper) => {
  const renderer = threeHelper.getRenderer();
  const scene = threeHelper.getScene();
  const camera = threeHelper.getCamera();
  console.log(scene);
  let x = 0;

  const loop = _ => {
    camera.position.x = x;
    x++;
    camera.lookAt({x: 0, y: 0, z: 0});    
      
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  }

  loop();
}
