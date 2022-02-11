import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpLocalClientService } from 'src/app/services/http-local-client.service';
import { IBookmark } from '../models/bookmark.model';

class BookmarkUrls {
  static Default = `/api/Bookmark`;
}

@Injectable()
export class BookmarkService {

  constructor(private http: HttpLocalClientService) { }

  //#region Bookmark Controller
  get(): Observable<IBookmark[]> {
    const url = `${BookmarkUrls.Default}`;
    return this.http.get<IBookmark[]>(url);
  }
  getById(id: number): Observable<IBookmark> {
    const url = `${BookmarkUrls.Default}/${id}`;
    return this.http.get(url);
  }
  post(model: any): Observable<any> {
    const url = `${BookmarkUrls.Default}`;
    return this.http.post(url, model);
  }
  put(model: any): Observable<any> {
    const url = `${BookmarkUrls.Default}`;
    return this.http.put(url, model);
  }
  delete(id: number): Observable<any> {
    const url = `${BookmarkUrls.Default}/${id}`;
    return this.http.delete(url);
  }
  //#endregion
}
