import symbols from './../symbols.js';

const w = symbols['wall'];
const c = symbols['coin'];
const x = symbols['void'];
const l = symbols['lava'];

export default [
  [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,],
  [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,],
  [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,],
  [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,],
  [x,x,x,x,c,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,],
  [x,x,x,x,w,x,x,x,x,x,c,x,x,x,x,x,x,x,x,x,x,x,x,x,],
  [x,x,x,x,x,x,x,x,w,l,l,l,w,x,x,x,x,x,x,x,x,x,x,x,],
  [x,x,x,x,x,x,x,x,x,w,w,w,x,x,x,w,w,x,x,x,x,x,x,x,],
  [x,x,x,x,x,x,x,x,x,x,x,x,x,w,w,x,x,x,x,x,x,x,x,x,],
  [x,x,x,x,x,x,x,x,x,x,c,c,x,x,x,x,x,x,x,x,x,x,x,x,],
  [w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,],
  [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,],
];
