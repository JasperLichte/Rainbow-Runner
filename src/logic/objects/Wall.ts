import Position from '../../interfaces/Position.js';
import LogicObject from './LogicObject.js';

export default class Wall extends LogicObject {

    constructor(initialPosition: Position) {
        super(initialPosition);
    }

}
