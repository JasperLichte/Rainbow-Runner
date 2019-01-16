import { setCSSVar } from './../func/cssFuncs.js';

const colors = Object.freeze({
  'background': '#e0dede',
  'objects-cube': '#00ffed',
  'objects-coin': '#cccc00',
  'objects-wall-body': '#222222',
  'objects-wall-border': '#eeeeee',
  'objects-player': '#0087ff',
  'objects-spike': '#ad1818',
  'menu-background': '#6f738e',
  'objects-diamond': '#c300ff',
});

// TODO: Refactor
for (const key in colors) {
  if (typeof colors[key] !== 'string') {
    continue;
  }
  const cssVarName = '--' + key + '-color';
  setCSSVar(cssVarName, colors[key])
}

export default colors;
