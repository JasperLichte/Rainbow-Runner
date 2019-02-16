import exceptions from './../errorhandling/exceptions.js';
import { playerControls } from './../controls/keyboardControls.js';
import { calcGravity } from './../func/funcs.js';
import { GRAVITY_OF_EARTH, STEP_SIZES, STEP_SPEEDS } from './conf/conf.js';
import globals from './../globals.js';
import Level from './Level.js';
var Player = (function () {
    function Player(initialPosition) {
        this._velocity = { x: 0, y: 0 };
        this._mass = 10;
        if (!initialPosition) {
            throw new Error(exceptions['INVALID_POSITION_OBJECT']);
        }
        this._position = initialPosition;
        this._gravity = calcGravity(this._mass, GRAVITY_OF_EARTH);
        this._levelLogic = new Level(globals.helpers.levelHelper.getCurrentLevel());
        this._listenForControls();
    }
    Player.prototype.getPosition = function () {
        var newPos = this._calcNewPosition();
        if (!(this._levelLogic.newPositionIsAWall(newPos.x, newPos.y))) {
            this._position.x = newPos.x;
            this._position.y = newPos.y;
            this._velocity.x = newPos.vel.x;
            this._velocity.y = newPos.vel.y;
        }
        this._calcNewPosition();
        return this._position;
    };
    Player.prototype._listenForControls = function () {
        var _this = this;
        window.addEventListener('keydown', function (e) {
            if (!(e.code in playerControls)) {
                return;
            }
            var control = playerControls[e.code];
            _this[control.action] && _this[control.action]();
        });
    };
    Player.prototype._calcNewPosition = function () {
        var newX = this._position.x + this._velocity.x;
        var newY = this._position.y + this._velocity.y;
        var newVelY = this._velocity.y - this._gravity;
        return {
            x: newX,
            y: newY,
            vel: {
                x: this._velocity.x,
                y: newVelY,
            }
        };
    };
    Player.prototype.jump = function () {
        var _this = this;
        this._velocity.y = 0;
        var targetHeigt = this._position.y + STEP_SIZES['player']['y'];
        var jumpStep = function () {
            _this._position.y += STEP_SPEEDS['player']['y'];
            if (_this._position.y >= targetHeigt) {
                return;
            }
            requestAnimationFrame(jumpStep);
        };
        jumpStep();
        return this;
    };
    Player.prototype.moveForward = function () {
        var _this = this;
        var target = this._position.x + STEP_SIZES['player']['x'];
        var step = function () {
            _this._position.x += STEP_SPEEDS['player']['x'];
            if (_this._position.x >= target) {
                return;
            }
            requestAnimationFrame(step);
        };
        step();
        return this;
    };
    Player.prototype.moveBackward = function () {
        var _this = this;
        var target = this._position.x - STEP_SIZES['player']['x'];
        var step = function () {
            _this._position.x -= STEP_SPEEDS['player']['x'];
            if (_this._position.x <= target) {
                return;
            }
            requestAnimationFrame(step);
        };
        step();
        return this;
    };
    return Player;
}());
export default Player;
