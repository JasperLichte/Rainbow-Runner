import Position from '../../interfaces/Position.js';
import Level from '../Level.js';
import globals from '../../globals/globals.js';

export default class LogicObject {

    protected position: Position;
    protected levelLogic: Level;

    constructor(initialPosition: Position) {
        this.position = initialPosition;
        this.levelLogic = globals.helpers.levelLogic;
    }

    public getPosition(): Position {
        return this.position;
    }

}
