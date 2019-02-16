import symbols from './../symbols.js';
var w = symbols['wall'];
var x = symbols['void'];
var s = symbols['spikes'];
var p = symbols['player'];
export default [
    [x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,],
    [x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,],
    [x, x, x, x, x, x, x, x, x, x, x, x, x, w, w, w, w, w, x, x, x, x, x, x,],
    [x, x, x, x, x, x, x, x, x, x, x, x, x, s, s, s, s, s, x, x, x, x, x, x,],
    [x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,],
    [x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,],
    [x, x, x, x, x, x, x, w, x, x, w, w, w, x, x, x, x, x, x, x, x, x, x, x,],
    [x, x, x, x, x, x, w, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,],
    [x, x, x, x, x, w, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,],
    [p, x, x, x, w, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,],
    [w, w, w, w, x, x, x, x, x, x, x, x, w, w, w, w, w, w, w, w, w, w, w, w,],
    [x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x,],
];
