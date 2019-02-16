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
import colors from './../../../colors.js';
var Spikes = (function (_super) {
    __extends(Spikes, _super);
    function Spikes() {
        var _this = _super.call(this, colors['objects-spikes']) || this;
        _this._geometry = new THREE.ConeGeometry(0.3, 0.3, 32);
        _this._object = new THREE.Mesh(_this._geometry, _this._material);
        return _this;
    }
    Spikes.prototype.tweakPosition = function () {
        this._object.position.y -= (0.35 + 0.075);
    };
    return Spikes;
}(Cube));
export default Spikes;
