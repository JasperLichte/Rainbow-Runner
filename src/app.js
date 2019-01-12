import render from './render/webgl/render.js';
import levels from './levels/levels.js';
import ThreeHelper from './render/webgl/ThreeHelper.js';

const threeHelper = new ThreeHelper();
const nextLevelGenerator = repeatedArray(levels);

render(threeHelper, nextLevelGenerator.next().value)
document.getElementById('next-level-btn').addEventListener('click', _ => {
  render(threeHelper, nextLevelGenerator.next().value)
})

function* repeatedArray(arr) {
  let index = 0;
  while (true) {
    yield arr[index++ % arr.length];
  }
}
