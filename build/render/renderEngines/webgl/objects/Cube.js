var THREE = window.THREE;
import exceptions from './../../../../errorhandling/exceptions.js';
var Cube = (function () {
    function Cube(color) {
        if (color === void 0) { color = '#ffffff'; }
        this._geometry = new THREE.BoxGeometry(1, 1, 1);
        this._material = new THREE.MeshBasicMaterial({ color: color });
        this._object = new THREE.Mesh(this._geometry, this._material);
    }
    Cube.prototype.getObject = function () {
        return this._object;
    };
    Cube.prototype.tweakPosition = function () { };
    Cube.prototype.setInitialPosition = function (position) {
        if (!position.hasOwnProperty('x') || !position.hasOwnProperty('y')) {
            throw new Error(exceptions['INVALID_POSITION_OBJECT']);
        }
        this._position = {
            x: position.x,
            y: position.y
        };
    };
    Cube.prototype.getInitialPosition = function () {
        return this._position;
    };
    Cube.prototype.move = function (x, y) {
        this._object.position.set(x, y, 0);
        return this;
    };
    return Cube;
}());
export default Cube;
