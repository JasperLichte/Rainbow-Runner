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
import RenderEngineHelperParent from './../RenderEngineHelperParent.js';
import colors from './../../colors.js';
import LevelHelper from './../../../levels/LevelHelper.js';
import globals from './../../../globals.js';
import Wall from './objects/Wall.js';
import Coin from './objects/Coin.js';
import Player from './objects/Player.js';
import Spikes from './objects/Spikes.js';
import Diamond from './objects/Diamond.js';
var ThreeHelper = (function (_super) {
    __extends(ThreeHelper, _super);
    function ThreeHelper() {
        var _this = _super.call(this, '3d') || this;
        _this._scene = null;
        _this._camera = null;
        _this._renderer = null;
        _this._cameraCenter = null;
        _this._incrementors = {
            camera: {
                x: null,
                y: null,
                z: null,
            }
        };
        _this._scene = new THREE.Scene();
        _this._scene.background = new THREE.Color(colors['canvas-background']);
        _this._camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        _this._scene.add(_this._camera);
        _this._renderer = new THREE.WebGLRenderer({ antialias: true });
        _this._renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(_this._renderer.domElement);
        _this._cameraCenter = LevelHelper.getLevelCenter(globals.helpers.levelHelper.getCurrentLevel());
        _this._incrementors = {
            camera: {
                x: _this._cameraCenter.x,
                y: _this._cameraCenter.y * -1,
                z: 15,
            },
        };
        return _this;
    }
    ThreeHelper.prototype.render = function () {
        this.animateCameraPosition();
        this._renderer.render(this._scene, this._camera);
        return this;
    };
    ThreeHelper.prototype.buildLevel = function (level) {
        if (level === void 0) { level = []; }
        if (!Array.isArray(level)) {
            return;
        }
        for (var y = 0; y < level.length; y++) {
            var row = level[y];
            if (!Array.isArray(row)) {
                return;
            }
            for (var x = 0; x < row.length; x++) {
                var blockType = LevelHelper.getBlockTypeBySymbol(row[x]);
                var block = ThreeHelper.getBlockByType(blockType);
                if (blockType === 'player' && block) {
                    this._player = block;
                }
                this.insertBlockIntoScene(block, { x: x, y: y });
            }
        }
        return this;
    };
    ThreeHelper.prototype.insertBlockIntoScene = function (block, pos) {
        var obj = null;
        if (block && block.getObject) {
            obj = block.getObject();
        }
        if (!obj) {
            return;
        }
        var x = pos.x;
        var y = pos.y * -1;
        this._scene.add(obj);
        block.setInitialPosition({ x: x, y: y });
        obj.position.set(x, y, 0);
        block.tweakPosition && block.tweakPosition();
        return this;
    };
    ThreeHelper.getBlockByType = function (blockType) {
        if (blockType === void 0) { blockType = ''; }
        switch (blockType) {
            case 'wall':
                return new Wall();
                break;
            case 'coin':
                return new Coin();
                break;
            case 'player':
                return new Player();
                break;
            case 'spikes':
                return new Spikes();
                break;
            case 'diamond':
                return new Diamond();
                break;
        }
        return null;
    };
    ThreeHelper.prototype.listenForCameraMovements = function () {
        var _this = this;
        var isMouseDown = false;
        var lastMousePos = { x: null, y: null };
        this._renderer.domElement.addEventListener('wheel', function (e) {
            isMouseDown = false;
            var scrollingUp = (e.deltaY < 0);
            if (scrollingUp) {
                if (_this._incrementors.camera.z >= 2) {
                    _this._incrementors.camera.z -= 0.6;
                }
            }
            else {
                if (_this._incrementors.camera.z <= 45) {
                    _this._incrementors.camera.z += 0.6;
                }
            }
        });
        this._renderer.domElement.addEventListener('mousedown', function (_) {
            isMouseDown = true;
        });
        this._renderer.domElement.addEventListener('mouseup', function (_) {
            isMouseDown = false;
        });
        this._renderer.domElement.addEventListener('mousemove', function (e) {
            if (!isMouseDown) {
                return;
            }
            if (!lastMousePos.x) {
                lastMousePos = {
                    x: e.x,
                    y: e.y
                };
            }
            var currentMousePos = {
                x: e.x,
                y: e.y
            };
            var movedToRight = (lastMousePos.x < currentMousePos.x);
            var movedToLeft = (lastMousePos.x > currentMousePos.x);
            if (movedToRight) {
                if (_this._incrementors.camera.x < 35) {
                    _this._incrementors.camera.x += 0.25;
                }
            }
            else if (movedToLeft) {
                if (_this._incrementors.camera.x > -35) {
                    _this._incrementors.camera.x -= 0.25;
                }
            }
            lastMousePos = currentMousePos;
        });
        return this;
    };
    ThreeHelper.prototype.animateCameraPosition = function () {
        this._camera.position.x = this._incrementors.camera.x;
        this._camera.position.y = this._incrementors.camera.y;
        this._camera.position.z = this._incrementors.camera.z;
        this._camera.lookAt(new THREE.Vector3(this._cameraCenter.x, this._cameraCenter.y * -1, 0));
        return this;
    };
    ThreeHelper.prototype.clearScene = function () {
        while (this._scene.children.length > 0) {
            this._scene.remove(this._scene.children[0]);
        }
        return this;
    };
    ThreeHelper.prototype.handleResize = function () {
        var _this = this;
        window.addEventListener('resize', function (_) {
            _this._camera.aspect = window.innerWidth / window.innerHeight;
            _this._camera.updateProjectionMatrix();
            _this._renderer.setSize(window.innerWidth, window.innerHeight);
        });
        return this;
    };
    return ThreeHelper;
}(RenderEngineHelperParent));
export default ThreeHelper;
