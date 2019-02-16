import globals from './../globals.js';
import render from './../render/render.js';
var CurrentLevelPanel = (function () {
    function CurrentLevelPanel() {
        CurrentLevelPanel.remove();
        this._domElement = document.createElement('div');
        this._domElement.setAttribute('class', 'current-level-panel');
        this._content = CurrentLevelPanel.getContentByType();
        this._domElement.innerHTML = this._content;
        document.body.appendChild(this._domElement);
    }
    CurrentLevelPanel.remove = function () {
        var els = document.querySelectorAll('.current-level-panel');
        els.forEach(function (el) { return el.remove(); });
    };
    CurrentLevelPanel.prototype.setContent = function (html) {
        if (html === void 0) { html = ''; }
        this._domElement.innerHTML = this._content = html;
        return this;
    };
    CurrentLevelPanel.prototype.getContent = function () {
        return this._content;
    };
    CurrentLevelPanel.getContentByType = function (type) {
        if (type === void 0) { type = ''; }
        switch (type) {
            default:
                return "\n          <div class=\"levelCounter\">\n            <span class=\"currentLevelInd\">" + (globals.helpers.levelHelper.getCurrentLevelIndex() + 1) + "</span>\n            <span class=\"slash\">/</span>\n            <span class=\"totallevels\">" + globals.helpers.levelHelper.getTotalLevels() + "</span>\n          </div>\n          <button id=\"next-level-btn\">Next Level</button>\n        ";
        }
        return '';
    };
    CurrentLevelPanel.prototype.listenForEvents = function () {
        document.getElementById('next-level-btn').addEventListener('click', function (_) {
            render(globals.helpers.renderHelper.getHelper(), globals.helpers.levelHelper.nextLevel());
        });
        return this;
    };
    return CurrentLevelPanel;
}());
export default CurrentLevelPanel;
