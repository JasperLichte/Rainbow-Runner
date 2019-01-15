import Menu from './ui/Menu.js';
import colors from './render/colors.js';

const menu = new Menu();
menu
  .setContent(Menu.getContentByType('menu'))
  .show()
  .listenForEvents();
