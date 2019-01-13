const THREE = window.THREE;

export default (threeHelper, level) => {

  let incrementors = {
    camera: {
      x: 0,
      y: 5,
      z: 10,
    },
    background: {
      rDir: true,
      gDir: true,
      bDir: true,
    }
  };

  const scene = threeHelper.getScene();
  const camera = threeHelper.getCamera();
  const renderer = threeHelper.getRenderer();

  while (scene.children.length > 0) {
    scene.remove(scene.children[0]);
  }

  threeHelper.buildLevel(level);
  const animate = _ => {
    // ======= ANIMATION LOOP ==========


    //animateBackgroundColors();
    animateCameraPosition();
    // =================================
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
  listenForEvents();

  // ###########################################################################
  // ============================== FUNCTIONS ==================================
  // ###########################################################################  
  function animateCameraPosition() {
    camera.position.x = incrementors.camera.x;
    camera.position.y = incrementors.camera.y;
    camera.position.z = incrementors.camera.z;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  }
  
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
  
  function listenForEvents() {
    let isMouseDown = false;
    let lastMousePos = {};
  
    // WHEEL
    renderer.domElement.addEventListener('wheel', e => {
      isMouseDown = false;
      const scrollingUp = (e.deltaY < 0);
      if (scrollingUp) {
        if (incrementors.camera.z >= 5) {
          incrementors.camera.z -= 0.6;
        }
      } else {
        if (incrementors.camera.z <= 35) {
          incrementors.camera.z += 0.6;
        }
      }
    });
  
    // MOUSEDOWN
    renderer.domElement.addEventListener('mousedown', _ => {
      isMouseDown = true
    });
  
    // MOUSUP
    renderer.domElement.addEventListener('mouseup', _ => {
      isMouseDown = false
    });
  
    // lMOUSEMOVE
    renderer.domElement.addEventListener('mousemove', e => {
      if (!isMouseDown) {
        return;
      }
      if (!lastMousePos.x) {
        lastMousePos = {
          x: e.x,
          y: e.y
        }
      }
      const currentMousePos = {
        x: e.x,
        y: e.y
      }
      const movedToRight = (lastMousePos.x < currentMousePos.x);
      const movedToLeft = (lastMousePos.x > currentMousePos.x);
      if (movedToRight) {
        if (incrementors.camera.x < 17.5) {
          incrementors.camera.x += 0.25;
        }
      } else if (movedToLeft) {
        if (incrementors.camera.x > -17.5) {
          incrementors.camera.x -= 0.25;
        }
      }
  
      lastMousePos = currentMousePos;
    });
  }
}
