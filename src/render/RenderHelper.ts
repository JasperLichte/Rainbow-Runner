import RenderEnineHelperParent from './renderEngines/RenderEngineHelperParent.js';

export default class RenderHelper {

  private _helper: RenderEnineHelperParent;

  public setEngineHelper(helper) {
    this._helper = helper;
  }

  public getHelper(): RenderEnineHelperParent {
    return this._helper;
  }

  public getMode(): string {
    if (!this._helper) {
      return null;
    }

    return this._helper.getMode();
  }

}
