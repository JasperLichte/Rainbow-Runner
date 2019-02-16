import CurrentLevelPanel from './../ui/CurrentLevelPanel.js';
import Player from './../logic/Player.js';
export default (function (engineHelper, level) {
    (new CurrentLevelPanel()).listenForEvents();
    engineHelper
        .clearScene()
        .buildLevel(level)
        .listenForCameraMovements()
        .handleResize();
    var playerObject = engineHelper.getPlayer();
    var playerLogic = new Player(playerObject.getInitialPosition());
    (function animate() {
        var playerPosition = playerLogic.getPosition();
        playerObject.move(playerPosition.x, playerPosition.y);
        engineHelper.render();
        requestAnimationFrame(animate);
    })();
});
