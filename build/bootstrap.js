import colors from './render/colors.js';
import Menu from './ui/Menu.js';
import LevelHelper from './levels/LevelHelper.js';
import RenderHelper from './render/RenderHelper.js';
import globals from './globals.js';
import { preventDefaultEvents } from './func/funcs.js';
import { setCSSColorVars } from './func/cssFuncs.js';
setCSSColorVars(colors);
preventDefaultEvents();
globals.helpers.levelHelper = new LevelHelper();
globals.helpers.renderHelper = new RenderHelper();
globals.menu = (new Menu())
    .setContent(Menu.getContentByType('menu'))
    .show()
    .listenForEvents();
