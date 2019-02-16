import RenderEnineHelperParent from './renderEngines/RenderEngineHelper.js';

export default class RenderHelper {

  private helper: RenderEnineHelperParent;

  public setEngineHelper(helper) {
    this.helper = helper;
  }

  public getHelper(): RenderEnineHelperParent {
    return this.helper;
  }

  public getMode(): string {
    if (!this.helper) {
      return null;
    }

    return this.helper.getMode();
  }

}
