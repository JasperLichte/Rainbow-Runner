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
import RotatingObject from './RotatingObject.js';
import colors from './../../../colors.js';
var Diamond = (function (_super) {
    __extends(Diamond, _super);
    function Diamond() {
        var _this = _super.call(this, true, true, colors['objects-diamond']) || this;
        _this._geometry = new THREE.OctahedronGeometry(0.3);
        _this._object = new THREE.Mesh(_this._geometry, _this._material);
        return _this;
    }
    Diamond.prototype.tweakPosition = function () {
        this._object.position.y -= 0.2;
    };
    return Diamond;
}(RotatingObject));
export default Diamond;
