import exceptions from './../../../../errorhandling/exceptions.js';
var Cube = (function () {
    function Cube(className) {
        if (className === void 0) { className = 'void'; }
        this._scale = 50;
        this._size = { width: 0, height: 0, depth: 0 };
        this._className = className.toLowerCase();
        this._size = {
            width: 1,
            height: 1,
            depth: 1,
        };
        this._object = this._buildObject();
    }
    Cube.prototype._buildObject = function () {
        var el = document.createElement('span');
        el.style.height = (this._size.height * this._scale) + 'px';
        el.style.width = (this._size.width * this._scale) + 'px';
        el.classList.add('block');
        el.classList.add(this._className);
        return el;
    };
    Cube.prototype.getObject = function () {
        return this._object;
    };
    Cube.prototype.getDimensions = function () {
        return this._size;
    };
    Cube.prototype.setInitialPosition = function (pos, centerElement) {
        if (centerElement === void 0) { centerElement = true; }
        if (!pos.hasOwnProperty('x') || !pos.hasOwnProperty('y')) {
            throw new Error(exceptions['INVALID_POSITION_OBJECT']);
        }
        this._position = pos;
        this.move(pos.x, pos.y);
        centerElement && this.center();
        return this;
    };
    Cube.prototype.getInitialPosition = function () {
        return this._position;
    };
    Cube.prototype.move = function (x, y) {
        this._object.style.left = (x * this._scale) + 'px';
        this._object.style.top = (y * this._scale * -1) + 'px';
        return this;
    };
    Cube.prototype.center = function () {
        this._object.style.left += ((1 - this._size.width) * this._scale / 2) + 'px';
        this._object.style.top += ((1 - this._size.height) * this._scale / 2) + 'px';
        return this;
    };
    return Cube;
}());
export default Cube;
