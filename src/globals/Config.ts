export default class Config {

  public static get(key: string) {
    return this[key];
  }

  public static set(key: string, value: any) {
    if (!Config.isSet(key)) {
      this[key] = value;
    }
  }

  public static isSet(key:string): boolean {
    if (!(key in this)) { return false; }
    return !!this[key];
  }

}
