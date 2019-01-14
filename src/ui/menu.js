import levels from './../levels/levels.js';
import ThreeHelper from './../render/webgl/ThreeHelper.js';
import render3d from './../render/webgl/render.js';
import DomHelper from './../render/dom/DomHelper.js';
import render2d from './../render/dom/render.js';
import { repeatedArray } from './../func/generators.js';

export default function menu() {

  document.querySelectorAll('#slideAnimation .play-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const nextLevelGenerator = repeatedArray(levels);
      let helper = null;
      let render = null;
      if (btn.getAttribute('data-mode') === '3d') {
        helper = new ThreeHelper();
        render = render3d;
      } else {
        helper = new DomHelper(document.getElementById('main'));
        render = render2d;
      }
      render(helper, nextLevelGenerator.next().value);    
      
      const el = document.getElementById('slideAnimation');
      el.innerHTML = '';
      el.style.transform = 'scale(0)';
      
      document.getElementById('next-level-btn').addEventListener('click', _ => {
        render(helper, nextLevelGenerator.next().value)
      });
    });
  });

}
menu();
