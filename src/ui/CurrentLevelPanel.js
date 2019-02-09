import globals from './../globals.js';
import render from './../render/render.js';

export default class CurrentLevelPanel {

  constructor() {
    CurrentLevelPanel.remove();
    this._domElement = document.createElement('div');
    this._domElement.setAttribute('class', 'current-level-panel');
    this._content = CurrentLevelPanel.getContentByType();
    this._domElement.innerHTML = this._content;
    document.body.appendChild(this._domElement);

    // ----------------
    this.setContent = this.setContent.bind(this);
    this.getContent = this.getContent.bind(this);
    this.listenForEvents = this.listenForEvents.bind(this);
  }

  static remove() {
    const els = document.querySelectorAll('.current-level-panel');
    els.forEach(el => el.remove());
  }

  setContent(html = '') {
    this._domElement.innerHTML = this._content = html;
    return this;
  }

  getContent() {
    return this._content;
  }

  static getContentByType(type = '') {
    switch(type) {
      default:
        return `
          <div class="levelCounter">
            <span class="currentLevelInd">${globals.helpers.levelHelper.getCurrentLevelIndex() + 1}</span>
            <span class="slash">/</span>
            <span class="totallevels">${globals.helpers.levelHelper.getTotalLevels()}</span>
          </div>
          <button id="next-level-btn">Next Level</button>
        `;
    }
  }

  listenForEvents() {
    document.getElementById('next-level-btn').addEventListener('click', _ => {
      render(globals.helpers.renderHelper.getHelper(), globals.helpers.levelHelper.nextLevel())
    });

    return this;
  }

}
