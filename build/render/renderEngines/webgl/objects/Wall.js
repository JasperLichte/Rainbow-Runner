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
import colors from '../../../colors.js';
var Wall = (function (_super) {
    __extends(Wall, _super);
    function Wall() {
        var _this = _super.call(this, colors['objects-wall-body']) || this;
        var wireframe = new THREE.LineSegments(new THREE.EdgesGeometry(_this._object.geometry), new THREE.LineBasicMaterial({ color: colors['objects-wall-border'], linewidth: 1 }));
        wireframe.renderOrder = 1;
        _this._object.add(wireframe);
        return _this;
    }
    return Wall;
}(Cube));
export default Wall;
