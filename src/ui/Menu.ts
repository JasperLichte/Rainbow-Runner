import ThreeHelper from '../render/renderEngines/webgl/ThreeHelper.js';
import DomHelper from '../render/renderEngines/dom/DomHelper.js';
import render from '../render/render.js';
import globals from './../globals.js';
import { APP_NAME, REPO_URL } from './../config/env.js'; 

export default class Menu {

  private _domElement: HTMLElement;
  private _wrapper: HTMLElement;
  private _content: string = '';
  private _hasDoneInitialRender: boolean = false;
  private _hamburger;

  public constructor() {
    this._domElement = document.createElement('div');
    this._domElement.setAttribute('class', 'menu');
    this._wrapper = document.createElement('div');
    this._wrapper.setAttribute('class', 'wrapper');
    this._wrapper.innerHTML = this._content;
    this._domElement.appendChild(this._wrapper);
    document.body.appendChild(this._domElement);

    this._addHamburgerButton();
  }

  public show(): Menu {
    this._domElement.style.left = '0px';
    return this;
  }

  public hide(): Menu {
    if (Math.random() > 0.5) {
      this._domElement.style.left = '-100vw';
    } else {
      this._domElement.style.left = '200vw';
    }
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
    return (this._domElement.style.left === '0px');
  }

  public setContent(html: string = ''): Menu {
    this._wrapper.innerHTML = this._content = html;
    return this;
  }

  public getContent(): string {
    return this._content;
  }

  public static getContentByType(type: string = 'menu'): string {
    switch(type) {
      case 'menu':
        return `<div class="menu-wrapper">
          <h1>${APP_NAME}</h1>
          <span class="version">Version: 0.1.2</span>
          <div class="buttons">
              <button class="play-btn" data-mode="3d">Play in 3d!</button>
              <button class="play-btn" data-mode="2d">Play in 2d!</button>
              <a href="${REPO_URL}">Contribute</a>
          </div>
          <p>By Jasper Lichte and Harun Can</p>
        </div>`;
    }
    return '';
  }

  public listenForEvents(): Menu {
    const levelHelper = globals.helpers.levelHelper;
    const playButtons = this._wrapper.querySelectorAll('.play-btn');
    playButtons.forEach(btn => {
      btn.addEventListener('click', _=> {
        this.hide();
        if (this._hasDoneInitialRender) {
          // Do initial rendering only once
          return;
        }
        
        const renderEngineHelper = (btn.getAttribute('data-mode') === '3d' 
          ? new ThreeHelper() 
          : new DomHelper(document.getElementById('main')));
        globals.helpers.renderHelper.setEngineHelper(renderEngineHelper);
        
        render(renderEngineHelper, levelHelper.getCurrentLevel());
        this._hasDoneInitialRender = true;

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
        this._hasDoneInitialRender && this.toggle();
      }
    });

    return this;
  }

  private _addHamburgerButton(): Menu {
    this._hamburger = document.createElement('button');
    this._hamburger.setAttribute('class', 'menu-hamburger');
    this._hamburger.innerHTML = '<span></span><span></span><span></span>';
    document.body.appendChild(this._hamburger);

    this._hamburger.addEventListener('click', _ => {
      this.show();
    });

    return this;
  }

}
