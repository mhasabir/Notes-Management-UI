import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpLocalClientService } from 'src/app/services/http-local-client.service';

class RegularNoteUrls {
  static Default = `/api/RegularNote`;
}

@Injectable()
export class RegularNoteService {

  constructor(private http: HttpLocalClientService) { }

  //#region RegularNote Controller
  get(): Observable<any> {
    const url = `${RegularNoteUrls.Default}`;
    return this.http.get(url);
  }
  getById(id: number): Observable<any> {
    const url = `${RegularNoteUrls.Default}/${id}`;
    return this.http.get(url);
  }
  post(model: any): Observable<any> {
    const url = `${RegularNoteUrls.Default}`;
    return this.http.post(url, model);
  }
  put(model: any): Observable<any> {
    const url = `${RegularNoteUrls.Default}`;
    return this.http.put(url, model);
  }
  delete(id: number): Observable<any> {
    const url = `${RegularNoteUrls.Default}/${id}`;
    return this.http.delete(url);
  }
  //#endregion
}
