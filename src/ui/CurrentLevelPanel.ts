import globals from './../globals.js';
import render from './../render/render.js';

export default class CurrentLevelPanel {

  private _domElement: HTMLElement;
  private _content: string;

  constructor() {
    CurrentLevelPanel.remove();
    this._domElement = document.createElement('div');
    this._domElement.setAttribute('class', 'current-level-panel');
    this._content = CurrentLevelPanel.getContentByType();
    this._domElement.innerHTML = this._content;
    document.body.appendChild(this._domElement);
  }

  public static remove(): void {
    const els = document.querySelectorAll('.current-level-panel');
    els.forEach(el => el.remove());
  }

  public setContent(html = ''): CurrentLevelPanel {
    this._domElement.innerHTML = this._content = html;
    return this;
  }

  public getContent(): string {
    return this._content;
  }

  public static getContentByType(type = ''): string {
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
    return '';
  }

  public listenForEvents(): CurrentLevelPanel {
    document.getElementById('next-level-btn').addEventListener('click', _ => {
      render(globals.helpers.renderHelper.getHelper(), globals.helpers.levelHelper.nextLevel())
    });

    return this;
  }

}
