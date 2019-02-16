import symbols from './../symbols.js';

const w = symbols['wall'];
const x = symbols['void'];
const s = symbols['spikes'];
const p = symbols['player'];

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
