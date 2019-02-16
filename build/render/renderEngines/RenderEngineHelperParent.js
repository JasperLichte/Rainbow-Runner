var RenderEngineHelperParent = (function () {
    function RenderEngineHelperParent(mode) {
        if (mode === void 0) { mode = ''; }
        this.mode = mode;
        this._mode = '';
        this._incrementors = {};
        this._player = null;
    }
    RenderEngineHelperParent.prototype.getMode = function () {
        return this._mode;
    };
    RenderEngineHelperParent.prototype.getIncrementors = function () {
        return this._incrementors;
    };
    RenderEngineHelperParent.prototype.render = function () {
        return this;
    };
    RenderEngineHelperParent.prototype.buildLevel = function (level) {
        if (level === void 0) { level = []; }
        return this;
    };
    RenderEngineHelperParent.prototype.insertBlockIntoScene = function (block, pos) {
        return this;
    };
    RenderEngineHelperParent.prototype.listenForCameraMovements = function () {
        return this;
    };
    RenderEngineHelperParent.prototype.animateCameraPosition = function () {
        return this;
    };
    RenderEngineHelperParent.prototype.clearScene = function () {
        return this;
    };
    RenderEngineHelperParent.prototype.handleResize = function () {
        return this;
    };
    RenderEngineHelperParent.prototype.getPlayer = function () {
        return this._player;
    };
    return RenderEngineHelperParent;
}());
export default RenderEngineHelperParent;
