export default class RenderHelper {

  constructor() {

    this._helper = null;

    // --------------
    this.setHelper = this.setHelper.bind(this);
    this.getHelper = this.getHelper.bind(this);
  }

  setHelper(helper) {
    this._helper = helper;
  }

  getHelper() {
    return this._helper;
  }

  getMode() {
    if (!this._helper) {
      return null;
    }

    return this._helper.getMode();
  }

}
