import exceptions from './../errorhandling/exceptions.js';
import LevelHelper from './../levels/LevelHelper.js';
var Level = (function () {
    function Level(level) {
        if (level === void 0) { level = []; }
        this._levelArray = [];
        if (!(LevelHelper.isValidLevel(level))) {
            throw new Error(exceptions['INVALID_LEVEL']);
        }
        this._levelArray = level;
    }
    Level.prototype.newPositionIsAWall = function (x, y) {
        var blockSize = 1;
        var newX = x - (blockSize / 2);
        var newY = y;
        var arrayX = Math.round(newX);
        var arrayY = Math.abs(Math.round(newY));
        if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray))
            return true;
        newX = x + (blockSize / 2);
        newY = y;
        arrayX = Math.round(newX);
        arrayY = Math.abs(Math.round(newY));
        if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray))
            return true;
        newX = x;
        newY = y - (blockSize / 2);
        arrayX = Math.round(newX);
        arrayY = Math.abs(Math.round(newY));
        if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray))
            return true;
        newX = x;
        newY = y + (blockSize / 2);
        arrayX = Math.round(newX);
        arrayY = Math.abs(Math.round(newY));
        if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray))
            return true;
        newX = x - (blockSize / 2);
        newY = y - (blockSize / 2);
        arrayX = Math.round(newX);
        arrayY = Math.abs(Math.round(newY));
        if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray))
            return true;
        newX = x + (blockSize / 2);
        newY = y - (blockSize / 2);
        arrayX = Math.round(newX);
        arrayY = Math.abs(Math.round(newY));
        if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray))
            return true;
        newX = x + (blockSize / 2);
        newY = y + (blockSize / 2);
        arrayX = Math.round(newX);
        arrayY = Math.abs(Math.round(newY));
        if (LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray))
            return true;
        newX = x - (blockSize / 2);
        newY = y + (blockSize / 2);
        arrayX = Math.round(newX);
        arrayY = Math.abs(Math.round(newY));
        return LevelHelper.positionIsWall(arrayX, arrayY, this._levelArray);
    };
    return Level;
}());
export default Level;
