import symbols from './symbols.js';
import levels from './levels.js';
import exceptions from './../errorhandling/exceptions.js';
var LevelHelper = (function () {
    function LevelHelper() {
        this._currentLevelIndex = -1;
        this._currentLevel = this.nextLevel();
    }
    LevelHelper.getBlockTypeBySymbol = function (symbol) {
        if (symbol === void 0) { symbol = ''; }
        for (var key in symbols) {
            if (symbols[key] === symbol) {
                return key;
            }
        }
        return '';
    };
    LevelHelper.positionIsWall = function (x, y, level) {
        if (!(LevelHelper.isValidLevel(level))) {
            throw new Error(exceptions['INVALID_LEVEL']);
        }
        if (!(LevelHelper.positionIsInLevelBounds(x, y, level))) {
            return false;
        }
        return ((LevelHelper.getBlockTypeBySymbol(level[y][x])) === 'wall');
    };
    LevelHelper.positionIsInLevelBounds = function (x, y, level) {
        if (!(LevelHelper.isValidLevel(level))) {
            throw new Error(exceptions['INVALID_LEVEL']);
        }
        return (y < level.length && x < level[0].length);
    };
    LevelHelper.prototype.getCurrentLevel = function () {
        return this._currentLevel;
    };
    LevelHelper.prototype.getCurrentLevelIndex = function () {
        return this._currentLevelIndex;
    };
    LevelHelper.prototype.getTotalLevels = function () {
        return levels.length;
    };
    LevelHelper.prototype.nextLevel = function () {
        this._currentLevelIndex = (this._currentLevelIndex + 1) % levels.length;
        var level = levels[this._currentLevelIndex];
        this._currentLevel = level;
        return level;
    };
    LevelHelper.isValidLevel = function (level) {
        if (level === void 0) { level = []; }
        if (!(Array.isArray(level)) || !level.length) {
            return false;
        }
        var width = null;
        for (var y = 0; y < level.length; y++) {
            if (!(Array.isArray(level[y])) || !(level[y].length)) {
                return false;
            }
            if (!width) {
                width = level[y].length;
            }
            else {
                if (level[y].length !== width) {
                    return false;
                }
            }
            for (var x = 0; x < level[y]; x++) {
                if (!(level[y][x] in symbols)) {
                    return false;
                }
            }
        }
        return true;
    };
    LevelHelper.getLevelCenter = function (level) {
        if (!(LevelHelper.isValidLevel(level))) {
            throw new Error(exceptions['INVALID_LEVEL']);
        }
        return {
            y: level.length / 2,
            x: level[0].length / 2,
        };
    };
    return LevelHelper;
}());
export default LevelHelper;
