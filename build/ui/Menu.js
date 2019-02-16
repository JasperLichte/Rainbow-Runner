import ThreeHelper from '../render/renderEngines/webgl/ThreeHelper.js';
import DomHelper from '../render/renderEngines/dom/DomHelper.js';
import render from '../render/render.js';
import globals from './../globals.js';
import { APP_NAME, REPO_URL } from './../config/env.js';
var Menu = (function () {
    function Menu() {
        this._content = '';
        this._hasDoneInitialRender = false;
        this._domElement = document.createElement('div');
        this._domElement.setAttribute('class', 'menu');
        this._wrapper = document.createElement('div');
        this._wrapper.setAttribute('class', 'wrapper');
        this._wrapper.innerHTML = this._content;
        this._domElement.appendChild(this._wrapper);
        document.body.appendChild(this._domElement);
        this._addHamburgerButton();
    }
    Menu.prototype.show = function () {
        this._domElement.style.left = '0px';
        return this;
    };
    Menu.prototype.hide = function () {
        if (Math.random() > 0.5) {
            this._domElement.style.left = '-100vw';
        }
        else {
            this._domElement.style.left = '200vw';
        }
        return this;
    };
    Menu.prototype.toggle = function () {
        if (this.isShown()) {
            this.hide();
        }
        else {
            this.show();
        }
        return this;
    };
    Menu.prototype.isShown = function () {
        return (this._domElement.style.left === '0px');
    };
    Menu.prototype.setContent = function (html) {
        if (html === void 0) { html = ''; }
        this._wrapper.innerHTML = this._content = html;
        return this;
    };
    Menu.prototype.getContent = function () {
        return this._content;
    };
    Menu.getContentByType = function (type) {
        if (type === void 0) { type = 'menu'; }
        switch (type) {
            case 'menu':
                return "<div class=\"menu-wrapper\">\n          <h1>" + APP_NAME + "</h1>\n          <span class=\"version\">Version: 0.1.2</span>\n          <div class=\"buttons\">\n              <button class=\"play-btn\" data-mode=\"3d\">Play in 3d!</button>\n              <button class=\"play-btn\" data-mode=\"2d\">Play in 2d!</button>\n              <a href=\"" + REPO_URL + "\">Contribute</a>\n          </div>\n          <p>By Jasper Lichte and Harun Can</p>\n        </div>";
        }
        return '';
    };
    Menu.prototype.listenForEvents = function () {
        var _this = this;
        var levelHelper = globals.helpers.levelHelper;
        var playButtons = this._wrapper.querySelectorAll('.play-btn');
        playButtons.forEach(function (btn) {
            btn.addEventListener('click', function (_) {
                _this.hide();
                if (_this._hasDoneInitialRender) {
                    return;
                }
                var renderEngineHelper = (btn.getAttribute('data-mode') === '3d'
                    ? new ThreeHelper()
                    : new DomHelper(document.getElementById('main')));
                globals.helpers.renderHelper.setEngineHelper(renderEngineHelper);
                render(renderEngineHelper, levelHelper.getCurrentLevel());
                _this._hasDoneInitialRender = true;
                playButtons.forEach(function (el) {
                    if (el !== btn) {
                        el.classList.add('disabled');
                        el.setAttribute('disabled', 'true');
                    }
                });
            });
        });
        window.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                _this._hasDoneInitialRender && _this.toggle();
            }
        });
        return this;
    };
    Menu.prototype._addHamburgerButton = function () {
        var _this = this;
        this._hamburger = document.createElement('button');
        this._hamburger.setAttribute('class', 'menu-hamburger');
        this._hamburger.innerHTML = '<span></span><span></span><span></span>';
        document.body.appendChild(this._hamburger);
        this._hamburger.addEventListener('click', function (_) {
            _this.show();
        });
        return this;
    };
    return Menu;
}());
export default Menu;
