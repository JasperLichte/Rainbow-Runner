import AnimationLoop from "../render/AnimationLoop.js";

export default class PlayPauseButton {

  private domElement: HTMLElement;
  private content: string;

  constructor() {
    this.domElement = document.createElement('div');
    this.domElement.setAttribute('class', 'play-pause-button');
    this.domElement.innerHTML = this.content = '';
    document.body.appendChild(this.domElement);
    this.domElement.addEventListener('click', AnimationLoop.start);
  }

  public update() {
    this.domElement.setAttribute('class', 'play-pause-button ' + (AnimationLoop.isRunning() ? 'running' : 'stopped'));
  }

}
