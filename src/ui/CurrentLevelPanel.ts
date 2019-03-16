import globals from '../globals/globals.js';
import render from './../render/render.js';
import LevelHelper from '../levels/LevelHelper.js';

export default class CurrentLevelPanel {

  private domElement: HTMLElement;
  private content: string;
  private fpsCounterElement: HTMLElement;

  public constructor() {
    CurrentLevelPanel.remove();
    this.domElement = document.createElement('div');
    this.domElement.setAttribute('class', 'current-level-panel');
    this.domElement.innerHTML = this.content = CurrentLevelPanel.getContentByType();
    document.body.appendChild(this.domElement);

    this.fpsCounterElement = document.querySelector('#fpsCounter > span');
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
          <div id="fpsCounter">
            <span></span>
          </div>
          ${true ? '' : `<div class="levelCounter">
            <span class="currentLevelInd">${globals.helpers.levelHelper.getCurrentLevelIndex() + 1}</span>
            <span class="slash">/</span>
            <span class="totallevels">${LevelHelper.getTotalLevels()}</span>
          </div>`}
          <button id="next-level-btn">Next Level</button>
        `;
    }
    return '';
  }

  public listenForEvents(): CurrentLevelPanel {
    document.getElementById('next-level-btn').addEventListener('click', async () => {
      render(globals.helpers.renderHelper.getHelper(), await globals.helpers.levelHelper.nextLevel())
    });

    return this;
  }

  public updateFpsCounter(fps: number) {
    if (!fps) return;
    this.fpsCounterElement.innerText = `${fps}fps`;

    let className = '';
    if (fps <= 10) {
      className = 'low';
    } else if (fps <= 40) {
      className = 'medium';
    } else {
      className = 'high';
    }
    this.fpsCounterElement.setAttribute('class', className);
  }

}
