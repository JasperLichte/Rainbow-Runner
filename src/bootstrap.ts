import './config/env.js';
import colors from './render/colors.js';
import Menu from './ui/Menu.js';
import LevelHelper from './levels/LevelHelper.js';
import RenderHelper from './render/RenderHelper.js';
import Globals from './Globals.js';
import { preventDefaultEvents } from './func/funcs.js';
import { setCSSColorVars } from './func/cssFuncs.js';

setCSSColorVars(colors);
preventDefaultEvents();

// helpers
Globals.levelHelper = new LevelHelper();
Globals.renderHelper = new RenderHelper();

// menu
Globals.menu = (new Menu())
  .setContent(Menu.getContentByType('menu'))
  .show()
  .listenForEvents();
