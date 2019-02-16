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
import RenderEngineHelperParent from './../RenderEngineHelperParent.js';
import LevelHelper from './../../../levels/LevelHelper.js';
import Wall from './objects/Wall.js';
import Player from './objects/Player.js';
import Coin from './objects/Coin.js';
import Spikes from './objects/Spikes.js';
import Diamond from './objects/Diamond.js';
var DomHelper = (function (_super) {
    __extends(DomHelper, _super);
    function DomHelper(domParent) {
        var _this = _super.call(this, '2d') || this;
        _this._domParent = domParent ? domParent : document.body;
        _this._domElement = _this._buildDomElement();
        _this._domParent.appendChild(_this._domElement);
        return _this;
    }
    DomHelper.prototype._buildDomElement = function () {
        var el = document.createElement('div');
        el.setAttribute('class', 'dom-engine-wrapper');
        return el;
    };
    DomHelper.prototype.clearScene = function () {
        this._domElement.innerHTML = '';
        return this;
    };
    DomHelper.prototype.render = function () {
        this.animateCameraPosition();
        return this;
    };
    DomHelper.prototype.buildLevel = function (level) {
        if (!(Array.isArray(level))) {
            return;
        }
        for (var y = 0; y < level.length; y++) {
            var row = level[y];
            if (!(Array.isArray(row))) {
                return;
            }
            for (var x = 0; x < row.length; x++) {
                var blockType = LevelHelper.getBlockTypeBySymbol(row[x]);
                var block = DomHelper.getBlockByType(blockType);
                this.insertBlockIntoScene(block, { x: x, y: y });
                if (blockType === 'player' && block) {
                    this._player = block;
                }
            }
        }
        return this;
    };
    DomHelper.prototype.insertBlockIntoScene = function (block, pos) {
        var obj = null;
        if (block && block.getObject) {
            obj = block.getObject();
        }
        if (!obj) {
            return;
        }
        var x = pos.x;
        var y = pos.y * -1;
        this._domElement.appendChild(obj);
        block && block.setInitialPosition({ x: x, y: y }, true);
        return this;
    };
    DomHelper.getBlockByType = function (blockType) {
        if (blockType === void 0) { blockType = ''; }
        switch (blockType) {
            case 'wall':
                return new Wall();
            case 'player':
                return new Player();
            case 'coin':
                return new Coin();
            case 'spikes':
                return new Spikes();
            case 'diamond':
                return new Diamond();
        }
        return null;
    };
    return DomHelper;
}(RenderEngineHelperParent));
export default DomHelper;
