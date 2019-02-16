import symbols from './../symbols.js';
var w = symbols['wall'];
var c = symbols['coin'];
var x = symbols['void'];
var s = symbols['spikes'];
var l = symbols['lava'];
var p = symbols['player'];
var y = symbols['diamond'];
export default [
    [x, x, x, x, x, x, x, x, x, x, x, x, x, x, w, w, w, w, x, x, x, x, x, x,],
    [x, x, x, x, x, x, x, x, x, w, x, x, x, x, c, x, x, w, x, x, x, x, x, x,],
    [x, x, x, x, x, x, x, x, c, s, x, x, y, x, w, x, x, w, x, x, x, x, x, x,],
    [x, x, x, x, c, s, x, x, w, w, l, l, w, l, l, w, x, w, x, x, x, x, x, x,],
    [x, x, x, x, w, w, x, y, x, w, w, w, w, w, w, w, x, w, x, x, x, x, x, x,],
    [x, x, x, x, x, x, x, w, x, x, x, x, x, x, x, w, x, w, x, x, x, x, x, x,],
    [x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, w, x, w, x, x, s, c, x, x,],
    [x, x, x, x, x, x, x, w, x, x, x, x, x, x, x, w, x, w, x, x, w, w, x, x,],
    [x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, w, x, w, x, x, x, x, x, w,],
    [p, x, x, x, w, w, w, w, x, x, x, x, x, x, x, w, x, w, x, x, x, x, x, x,],
    [w, w, w, w, x, x, x, x, x, x, x, x, x, x, w, x, c, x, x, x, s, x, x, w,],
    [x, x, x, x, x, x, x, x, x, x, x, x, x, x, w, w, w, w, w, w, w, w, w, w,],
];
