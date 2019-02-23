import LevelHelper from './levels/LevelHelper.js';
import RenderHelper from './render/RenderHelper.js';
import Menu from './ui/Menu.js';
import Level from './logic/Level.js';

const levelHelper: LevelHelper = null;
const renderHelper: RenderHelper = null;
const levelLogic: Level = null;
const menu: Menu = null;
const isRunning: boolean = false;

export default {
  helpers: {
    levelHelper,
    renderHelper,
    levelLogic
  },
  menu,
  state: {
    isRunning
  }
}
