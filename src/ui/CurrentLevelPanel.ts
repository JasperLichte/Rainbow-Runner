import globals from './../globals.js';
import render from './../render/render.js';

export default class CurrentLevelPanel {

  private domElement: HTMLElement;
  private content: string;

  public constructor() {
    CurrentLevelPanel.remove();
    this.domElement = document.createElement('div');
    this.domElement.setAttribute('class', 'current-level-panel');
    this.domElement.innerHTML = this.content = CurrentLevelPanel.getContentByType();
    document.body.appendChild(this.domElement);
  }

  public static remove(): void {
    const els = document.querySelectorAll('.current-level-panel');
    els.forEach(el => el.remove());
  }

  public setContent(html: string = ''): CurrentLevelPanel {
    this.domElement.innerHTML = this.content = html;
    return this;
  }

  public getContent(): string {
    return this.content;
  }

  public static getContentByType(type: string = ''): string {
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
    document.getElementById('next-level-btn').addEventListener('click', () => {
      render(globals.helpers.renderHelper.getHelper(), globals.helpers.levelHelper.nextLevel())
    });

    return this;
  }

}
