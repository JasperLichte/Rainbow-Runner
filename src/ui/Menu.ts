import ThreeHelper from '../render/renderEngines/webgl/ThreeHelper.js';
import DomHelper from '../render/renderEngines/dom/DomHelper.js';
import render from '../render/render.js';
import globals from './../globals.js';
import { APP_NAME, REPO_URL, CONTRIBUTORS, VERSION } from './../config/env.js'; 
import AnimationLoop from '../render/AnimationLoop.js';

export default class Menu {

  private domElement: HTMLDivElement = null;
  private wrapper: HTMLDivElement = null;
  private content: string = '';
  private hasDoneInitialRender: boolean = false;
  private hamburger: HTMLButtonElement = null;

  public constructor() {
    this.domElement = document.createElement('div');
    this.domElement.setAttribute('class', 'menu');
    this.wrapper = document.createElement('div');
    this.wrapper.setAttribute('class', 'wrapper');
    this.wrapper.innerHTML = this.content;
    this.domElement.appendChild(this.wrapper);
    document.body.appendChild(this.domElement);

    this.addHamburgerButton();
  }

  public show(): Menu {
    this.domElement.style.left = '0px';
    AnimationLoop.stop();
    return this;
  }

  public hide(): Menu {
    if (Math.random() > 0.5) {
      this.domElement.style.left = '-100vw';
    } else {
      this.domElement.style.left = '200vw';
    }
    this.hasDoneInitialRender && AnimationLoop.start();
    return this;
  }

  public toggle(): Menu {
    if (this.isShown()) {
      this.hide();
    } else {
      this.show();
    }
    return this;
  }

  public isShown(): boolean {
    return (this.domElement.style.left === '0px');
  }

  public setContent(html: string = ''): Menu {
    this.wrapper.innerHTML = this.content = html;
    return this;
  }

  public getContent(): string {
    return this.content;
  }

  public static getContentByType(type: string = 'menu'): string {
    switch(type) {
      case 'menu':
        let contributorsHtml = '';
        for (const key in CONTRIBUTORS) {
          contributorsHtml += CONTRIBUTORS[key]['name'] + ' ';
        }

        return `<div class="menu-wrapper">
          <h1>${APP_NAME}</h1>
          <span class="version">Version: ${VERSION}</span>
          <div class="buttons">
              <button class="play-btn" data-mode="3d">Play in 3d!</button>
              <button class="play-btn" data-mode="2d">Play in 2d!</button>
              <a href="${REPO_URL}">Contribute</a>
          </div>
          <p>By ${contributorsHtml}</p>
        </div>`;
    }
    return '';
  }

  public listenForEvents(): Menu {
    const levelHelper = globals.helpers.levelHelper;
    const playButtons = this.wrapper.querySelectorAll('.play-btn');
    playButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.hide();
        if (this.hasDoneInitialRender) {
          // Do initial rendering only once
          return;
        }
        
        const renderEngineHelper = (btn.getAttribute('data-mode') === '3d' 
          ? new ThreeHelper() 
          : new DomHelper(document.getElementById('main')));
        globals.helpers.renderHelper.setEngineHelper(renderEngineHelper);
        
        render(renderEngineHelper, levelHelper.getCurrentLevel());
        this.hasDoneInitialRender = true;

        // Disable button
        playButtons.forEach(el => {
          if (el !== btn) {
            el.classList.add('disabled');
            el.setAttribute('disabled', 'true');
          }
        });
      });
    });

    // KEY DOWN
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this.hasDoneInitialRender && this.toggle();
      }
    });

    return this;
  }

  private addHamburgerButton(): Menu {
    this.hamburger = document.createElement('button');
    this.hamburger.setAttribute('class', 'menu-hamburger');
    this.hamburger.innerHTML = '<span></span><span></span><span></span>';
    document.body.appendChild(this.hamburger);

    this.hamburger.addEventListener('click', () => {
      this.show();
    });

    return this;
  }

}
