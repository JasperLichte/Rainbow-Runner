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
import Cube from './Cube.js';
import colors from './../../../colors.js';
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super.call(this, colors['objects-player']) || this;
    }
    Player.prototype.tweakPosition = function () {
        this._object.position.y -= 0.15;
    };
    return Player;
}(Cube));
export default Player;
