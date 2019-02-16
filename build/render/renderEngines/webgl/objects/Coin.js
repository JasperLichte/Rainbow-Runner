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
var Coin = (function (_super) {
    __extends(Coin, _super);
    function Coin() {
        var _this = _super.call(this, true, true, colors['objects-coin']) || this;
        _this._geometry = new THREE.TorusGeometry(0.2, 0.05, 16, 100);
        _this._object = new THREE.Mesh(_this._geometry, _this._material);
        return _this;
    }
    Coin.prototype.tweakPosition = function () {
        this._object.position.y -= 0.2;
    };
    return Coin;
}(RotatingObject));
export default Coin;
