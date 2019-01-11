export default class DomEngine {

  constructor(domParent) {
    if (!domParent) {
      domParent = document.body;
    }
    this._domParent = domParent;
    this._wrapper = this.buildWrapper();
    this._domParent.appendChild(this._wrapper);
  }

  buildWrapper() {
    const el = document.createElement('div');
    el.setAttribute('class', 'dom-engine-wrapper');
    return el;
  }

}
