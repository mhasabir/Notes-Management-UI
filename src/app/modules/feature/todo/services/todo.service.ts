import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpLocalClientService } from 'src/app/services/http-local-client.service';

class TodoUrls {
  static Default = `/api/Todo`;
}

@Injectable()
export class TodoService {

  constructor(private http: HttpLocalClientService) { }

  //#region Todo Controller
  get(): Observable<any> {
    const url = `${TodoUrls.Default}`;
    return this.http.get(url);
  }
  getById(id: number): Observable<any> {
    const url = `${TodoUrls.Default}/${id}`;
    return this.http.get(url);
  }
  post(model: any): Observable<any> {
    const url = `${TodoUrls.Default}`;
    return this.http.post(url, model);
  }
  put(model: any): Observable<any> {
    const url = `${TodoUrls.Default}`;
    return this.http.put(url, model);
  }
  delete(id: number): Observable<any> {
    const url = `${TodoUrls.Default}/${id}`;
    return this.http.delete(url);
  }
  //#endregion
}
