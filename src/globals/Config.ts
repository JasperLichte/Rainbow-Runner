export default class Config {
  
  private static APP_NAME: string;
  private static PRODUCTION: boolean;
  private static REPO_URL: string;
  private static CONTRIBUTORS: object;
  private static VERSION: string;

  public static get(key: string) {
    return this[key];
  }

  public static set(key: string, value: any) {
    this[key] = value;
  }

}
