import './render/colors.js';
import Menu from './ui/Menu.js';
import globals from './globals.js';

globals.menu = (new Menu())
  .setContent(Menu.getContentByType('menu'))
  .show()
  .listenForEvents();
