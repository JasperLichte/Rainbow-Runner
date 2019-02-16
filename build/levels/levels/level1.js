import symbols from './../symbols.js';
var p = symbols['player'];
var w = symbols['wall'];
var c = symbols['coin'];
var x = symbols['void'];
var l = symbols['lava'];
var s = symbols['spikes'];
var y = symbols['diamond'];
export default [
    [x, x, x, x, x, x, x, x, x, x, x, c, c, x, x, x, x, x, x, x, x, x, x, x,],
    [x, x, x, x, x, x, x, w, w, w, w, w, w, w, w, w, w, w, x, x, x, x, x, x,],
    [x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,],
    [x, x, x, x, w, w, x, x, x, x, x, x, x, x, x, x, x, x, x, s, s, c, x, x,],
    [x, x, x, x, x, x, x, x, c, c, x, x, x, x, x, x, x, x, x, w, w, w, x, x,],
    [x, x, x, x, x, x, x, w, w, w, w, x, x, c, s, x, x, x, x, x, x, x, x, x,],
    [x, x, x, x, x, x, x, x, x, x, x, x, x, w, w, x, x, x, x, x, x, x, x, x,],
    [x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,],
    [x, x, x, x, x, x, x, x, x, x, w, w, x, x, x, x, x, x, x, x, x, x, x, x,],
    [p, x, y, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,],
    [w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w,],
    [x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,],
];
