import Element from '../interfaces/Element.js';

export function moveElements(elements: Element[]): void {
    for (var i = 0, len = elements.length; i < len; i++) {
      elements[i].object.move(elements[i].logic.getPosition());
    }
}

export function rotateElements(elements: Element[]): void {
    for (var i = 0, len = elements.length; i < len; i++) {
        elements[i].object.rotate();
    }
}
