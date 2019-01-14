import { setCSSVar } from './../func/cssFuncs.js';
import { getPathInObj } from './../func/funcs.js';

const colors = Object.freeze({
  background: '#992244',
  objects: {
    cube: '#00ffed',
    coin: '#cccc00',
    wall: {
      body: '#222222',
      border: '#eeeeee',
    },
  }
});

loopThroughObj(colors)
function loopThroughObj(object) {
  for (const key in object) {
    const val = object[key];
    if (typeof val === 'object') {
      loopThroughObj(val);
      continue;
    } else if (typeof val === 'string') {
      const cssVarName = '--' + getPathInObj(colors, val, key).replace(key + '-', '') + '-color';
      setCSSVar(cssVarName, val)
    }
  }
}

export default colors;
