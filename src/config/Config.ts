export default class Config {

  private static consts = {};

  public static get(key: string) {
    return Config.consts[key];
  }

  public static set(key: string, value: any) {
    if (!Config.isSet(key)) {
      Config.consts[key] = value;
    }
  }

  public static isSet(key:string): boolean {
    if (!(key in Config.consts)) { return false; }
    return !!Config.consts[key];
  }

}
