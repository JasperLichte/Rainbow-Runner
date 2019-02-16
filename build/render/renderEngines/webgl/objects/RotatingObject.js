var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var THREE = window.THREE;
import Cube from './Cube.js';
var RotatingObject = (function (_super) {
    __extends(RotatingObject, _super);
    function RotatingObject(randomSpeed, randomDir, color) {
        if (randomSpeed === void 0) { randomSpeed = true; }
        if (randomDir === void 0) { randomDir = true; }
        if (color === void 0) { color = '#ffffff'; }
        var _this = _super.call(this, color) || this;
        _this._rotationSpeed = 0.01;
        if (randomSpeed) {
            _this._rotationSpeed = Math.random() * 0.050 + 0.025;
        }
        _this._rotationDir = true;
        if (randomDir) {
            _this._rotationDir = (Math.random() > 0.5);
        }
        _this._rotate = _this._rotate.bind(_this);
        _this._rotate();
        return _this;
    }
    RotatingObject.prototype._rotate = function () {
        if (this._rotationDir) {
            this._object.rotation.y += this._rotationSpeed;
        }
        else {
            this._object.rotation.y -= this._rotationSpeed;
        }
        requestAnimationFrame(this._rotate);
    };
    return RotatingObject;
}(Cube));
export default RotatingObject;
