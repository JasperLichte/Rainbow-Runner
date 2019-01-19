import './render/colors.js';
import Menu from './ui/Menu.js';
import LevelHelper from './levels/LevelHelper.js';
import globals from './globals.js';

// helpers
globals.helpers = {};
globals.helpers.levelHelper = new LevelHelper();

// menu
globals.menu = (new Menu())
  .setContent(Menu.getContentByType('menu'))
  .show()
  .listenForEvents();
