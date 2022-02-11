export class LocalStorageHelper {

  //#region static Variables

  //#endregion

  //#region Public static Methods
  public static GetAccessToken(): string | null {
    let data = localStorage.getItem('ACCESS_TOKEN');
    if (data && data !== "undefined" && data !== "" && data !== "null") {
      data = JSON.parse(data);
    } else {
      data = null;
    }
    return data;
  }
  public static clearAllLocalStorageKeyAndValue(): void {
    localStorage.clear();
  }
  public static IsLoggedIn(): boolean {
    let accessToken = this.GetAccessToken()
    if (!accessToken) {
      return false;
    } else {
      return true;
    }
  }
  //#endregion

  //#region Private static Methods

  //#endregion
}
