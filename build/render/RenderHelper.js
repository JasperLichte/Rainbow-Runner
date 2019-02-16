var RenderHelper = (function () {
    function RenderHelper() {
    }
    RenderHelper.prototype.setEngineHelper = function (helper) {
        this._helper = helper;
    };
    RenderHelper.prototype.getHelper = function () {
        return this._helper;
    };
    RenderHelper.prototype.getMode = function () {
        if (!this._helper) {
            return null;
        }
        return this._helper.getMode();
    };
    return RenderHelper;
}());
export default RenderHelper;
