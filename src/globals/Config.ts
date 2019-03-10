export default class Config {

  private static APP_NAME: string;
  private static PRODUCTION: boolean;
  private static REPO_URL: string;
  private static CONTRIBUTORS: {}|[];
  private static VERSION: string;

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
