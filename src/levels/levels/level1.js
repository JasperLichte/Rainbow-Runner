import symbols from './../symbols.js';

const p = symbols['player'];
const w = symbols['wall'];
const c = symbols['coin'];
const x = symbols['void'];
const l = symbols['lava'];
const s = symbols['spikes'];

export default [
  [x,x,x,x,x,x,x,x,x,x,x,c,c,x,x,x,x,x,x,x,x,x,x,x,],
  [x,x,x,x,x,x,x,w,w,w,w,w,w,w,w,w,w,w,x,x,x,x,x,x,],
  [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,],
  [x,x,x,x,w,w,x,x,x,x,x,x,x,x,x,x,x,x,x,s,s,c,x,x,],
  [x,x,x,x,x,x,x,x,c,c,x,x,x,x,x,x,x,x,x,w,w,w,x,x,],
  [x,x,x,x,x,x,x,w,w,w,w,x,x,c,s,x,x,x,x,x,x,x,x,x,],
  [x,x,x,x,x,x,x,x,x,x,x,x,x,w,w,x,x,x,x,x,x,x,x,x,],
  [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,],
  [x,x,x,x,x,x,x,x,x,x,w,w,x,x,x,x,x,x,x,x,x,x,x,x,],
  [p,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,],
  [w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,],
  [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,],
];
