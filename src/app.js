import levels from './levels/levels.js';
import ThreeHelper from './render/webgl/ThreeHelper.js';
import render3d from './render/webgl/render.js';
import DomHelper from './render/dom/DomHelper.js';
import render2d from './render/dom/render.js';
import { repeatedArray } from './func/generators.js';

// TODO: Refactor
const nextLevelGenerator = repeatedArray(levels);
const level1 = nextLevelGenerator.next().value;
document.querySelectorAll('#slideAnimation .play-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    let helper = null;
    let render = null;
    if (btn.getAttribute('data-mode') === '3d') {
      helper = new ThreeHelper();
      render = render3d;
    } else {
      helper = new DomHelper(document.getElementById('main'));
      render = render2d;
    }
    render(helper, level1);    
    
    const el = document.getElementById('slideAnimation');
    el.innerHTML = '';
    el.style.transform = 'scale(0)';
    
    document.getElementById('next-level-btn').addEventListener('click', _ => {
      render(helper, nextLevelGenerator.next().value)
    });
  });
});
