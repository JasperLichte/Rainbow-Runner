import render from './render/webgl/render.js';
import levels from './levels/levels.js';
import ThreeHelper from './render/webgl/ThreeHelper.js';
import { repeatedArray } from './func/generators.js';

document.querySelector('#slideAnimation .play-btn').addEventListener('click', function() {
  const threeHelper = new ThreeHelper();
  const nextLevelGenerator = repeatedArray(levels);
  render(threeHelper, nextLevelGenerator.next().value);
  
  const el = document.getElementById('slideAnimation');
  el.innerHTML = '';
  el.style.transform = 'scale(0)';
  
  document.getElementById('next-level-btn').addEventListener('click', _ => {
    render(threeHelper, nextLevelGenerator.next().value)
  });
});
