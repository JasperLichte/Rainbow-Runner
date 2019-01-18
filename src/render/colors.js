import { setCSSColorVars } from './../func/cssFuncs.js';

const colors = Object.freeze({
  'background': '#e0dede',
  'objects-cube': '#00ffed',
  'objects-coin': '#cccc00',
  'objects-wall-body': '#222222',
  'objects-wall-border': '#eeeeee',
  'objects-player': '#0087ff',
  'objects-spikes': '#ad1818',
  'menu-background': '#6f738e',
  'objects-diamond': '#c300ff',
});

export default colors;

setCSSColorVars(colors);
