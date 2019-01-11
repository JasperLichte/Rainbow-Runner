import symbols from './../symbols.js';

const w = symbols['wall'];
const p = symbols['player'];
const l = symbols['lava'];
const c = symbols['coin'];
const x = symbols['void'];

const level = [];
for (let i = 0; i < 10; i++) {
  level.push(Array(10).fill(x));
}

export default level;
