import LevelHelper from './../../levels/LevelHelper.js';

export default class DomHelper {

  constructor(domParent) {
    if (!domParent) {
      domParent = document.body;
    }
    this._domParent = domParent;
    this._domElement = this._buildDomElement();
    this._domParent.appendChild(this._domElement);

    // --------------
    this.getIncrementors = this.getIncrementors.bind(this);
    this.clearScene = this.clearScene.bind(this);
    this.buildLevel = this.buildLevel.bind(this);

  }

  getIncrementors() {
    return this._incrementors;
  }

  _buildDomElement() {
    const el = document.createElement('div');
    el.setAttribute('class', 'dom-engine-wrapper');
    return el;
  }

  clearScene() {
    this._domElement.innerHTML = '';
    return this;
  }

  buildLevel(level) {
    if (!(Array.isArray(level))) {return;}
    for (let y = 0; y < level.length; y++) {
      const row = level[y];
      const blockTypes = [];
      if (!(Array.isArray(row))) {return;}
      for (let x = 0; x < row.length; x++) {
        blockTypes.push(LevelHelper.getBlockTypeBySymbol(row[x]));
      }
      this._appendRow(blockTypes);
    }
    return this;
  }

  _appendRow(blockTypes = []) {
    const rowEl = document.createElement('div');
    rowEl.setAttribute('class', 'row');

    blockTypes.forEach(type => {
      const blockEl = document.createElement('span');
      blockEl.setAttribute('class', 'block ' + type);
      rowEl.appendChild(blockEl);
    });

    this._domElement.appendChild(rowEl);
  }

}
