export var calcGravity = function (m, g) { return (m / 100000) * g; };
export var preventDefaultEvents = function () {
    var preventDefault = function (e) { return e.preventDefault(); };
    window.addEventListener('keydown', function (e) { return e.code === 'Space' && preventDefault(e); });
};
