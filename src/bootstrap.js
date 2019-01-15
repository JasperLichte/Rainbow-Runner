import './render/colors.js';
import Menu from './ui/Menu.js';

(new Menu())
  .setContent(Menu.getContentByType('menu'))
  .show()
  .listenForEvents();
