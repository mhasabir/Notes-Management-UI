import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from "../../environments/environment";
import { LocalStorageHelper } from '../helpers/local-storage.helper';

@Injectable()
export class HttpLocalClientService {
  public BASE_URL: string;
  public token: string = '';
  constructor(private http: HttpClient, private _router: Router) {
    this.BASE_URL = environment.base_url;
  }

  get<R>(url: string) {
    return this.http.get<R>(this.BASE_URL + url, this.getHeaders());
  }
  post<T, R>(url: string, data: T) {
    return this.http.post<R>(this.BASE_URL + url + "?", data, this.getHeaders());
  }
  put<T, R>(url: string, data: T) {
    return this.http.put<R>(this.BASE_URL + url, data, this.getHeaders());
  }
  delete<R>(url: string) {
    return this.http.delete<R>(this.BASE_URL + url, this.getHeaders());
  }
  deleteT<T, R>(url: string, data: T) {
    const options = { ...this.getHeaders(), body: data }
    return this.http.delete<T>(this.BASE_URL + url, options);
  }
  private getHeaders() {
    this.setToken();
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      'accept': '*/*',
      "Authorization": "bearer " + this.token,
    });
    return { headers: headers, reportProgress: true };
  }
  private setToken() {
    let accessToken = LocalStorageHelper.GetAccessToken()
    if (accessToken) {
      try {
        this.token = accessToken;
      }
      catch (error) {
        LocalStorageHelper.clearAllLocalStorageKeyAndValue();
        this._router.navigate(['/login']);
      }
    } else {
      LocalStorageHelper.clearAllLocalStorageKeyAndValue();
      this._router.navigate(['/login']);
    }
  }
}
