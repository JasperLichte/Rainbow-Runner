import { setCSSColorVars } from './../func/cssFuncs.js';

const colors = Object.freeze({
  // Canvas
  'canvas-background': '#e0dede',
  // Objects
  'objects-cube': '#00ffed',
  'objects-coin': '#cccc00',
  'objects-wall-body': '#222222',
  'objects-wall-border': '#eeeeee',
  'objects-player': '#0087ff',
  'objects-spikes': '#ad1818',
  'objects-diamond': '#c300ff',
  // UI-elements
  'ui-menu-background': '#6f738e',
  'ui-menu-wrapper-background': '#222',
  'ui-menu-wrapper-font': '#eee',
  'ui-menu-hamburger-button': '#ffffff',
});

export default colors;

setCSSColorVars(colors);
