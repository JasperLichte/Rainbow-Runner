import RenderEngineHelper from './renderEngines/RenderEngineHelper.js';
import Element from '../interfaces/Element.js';
import Player from '../logic/objects/Player.js';

export default class RenderHelper {

  private helper: RenderEngineHelper;

  public setEngineHelper(helper: RenderEngineHelper) {
    this.helper = helper;
  }

  public getHelper(): RenderEngineHelper {
    return this.helper;
  }

  public getMode(): string {
    if (!this.helper) {
      return null;
    }

    return this.helper.getMode();
  }

  public static getMovingElements(engineHelper: RenderEngineHelper): Element[] {
    const elements: Element[] = [];

    elements.push({
      object: engineHelper.getPlayer(),
      logic: new Player(engineHelper.getPlayer().getInitialPosition())
    });

    return elements;
  }

  public static getRotatingElements(engineHelper: RenderEngineHelper): Element[] {
    const arr: Element[] = [];

    for (const coin of engineHelper.getCoins()) {
      arr.push({
        object: coin,
        logic: null,
      });
    }
    
    return arr;
  }

}
