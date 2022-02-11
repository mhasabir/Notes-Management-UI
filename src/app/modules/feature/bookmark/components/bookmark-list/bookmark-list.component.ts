import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TableConfig } from 'src/app/modules/shared/table/table.model';
import { IBookmark } from '../../models/bookmark.model';
import { BookmarkService } from '../../services/bookmark.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent implements OnInit {
  //#region Variables Declaration
  public columns: TableConfig.IColumn[] = [
    new TableConfig.Column('bookmarkId', { header: 'Id' }),
    new TableConfig.Column('webURL', { header: 'Web URL' }),
  ];
  public dataSource: any[] = [];

  protected ngUnsubscribe$: Subject<void> = new Subject<void>();

  //#endregion

  //#region Constructor
  constructor(private _bookmarkService: BookmarkService) {
    let data: any = {
      bookmarkId: '1',
      webURL: '1020',
    }
    for (let index = 0; index < 30; index++) {
      this.dataSource.push(data);
    }
  }
  //#endregion

  //#region Input & Output

  //#endregion

  //#region lifecycle hook Methods
  ngOnInit(): void {
    this.getData();
  }
  ngAfterViewInit() {

  }
  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
  //#endregion

  //#region HTML Events

  //#endregion

  //#region Api Methods
  private getData(): void {
    this._bookmarkService.get().pipe(takeUntil(this.ngUnsubscribe$)).subscribe((res: IBookmark[]) => {
      if (res) {
        this.dataSource = res;
      }
    }, (err => {
      console.log('action cannot perform, something went wrong!');
    }));
  }
  //#endregion

  //#region Private Methods

  //#endregion
}

