import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpLocalClientService } from 'src/app/services/http-local-client.service';

class UserUrls {
  static Default = `/api/User`;
}

@Injectable()
export class UserService {

  constructor(private http: HttpLocalClientService) { }

  //#region User Controller
  get(): Observable<any> {
    const url = `${UserUrls.Default}`;
    return this.http.get(url);
  }
  getById(id: number): Observable<any> {
    const url = `${UserUrls.Default}/${id}`;
    return this.http.get(url);
  }
  post(model: any): Observable<any> {
    const url = `${UserUrls.Default}`;
    return this.http.post(url, model);
  }
  put(model: any): Observable<any> {
    const url = `${UserUrls.Default}`;
    return this.http.put(url, model);
  }
  delete(id: number): Observable<any> {
    const url = `${UserUrls.Default}/${id}`;
    return this.http.delete(url);
  }
  //#endregion
}
