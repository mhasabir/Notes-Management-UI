import { Component, Input, OnInit } from '@angular/core';
import { TableConfig } from './table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  //#region Variables Declaration
  // protected ngUnsubscribe$: Subject<void> = new Subject<void>();
  //#endregion

  //#region Constructor
  constructor() {

  }
  //#endregion

  //#region Input & Output
  private _columns: TableConfig.IColumn[] = [];
  @Input() set columns(values: TableConfig.IColumn[]) {
    if (values) {
      this._columns = values;
      console.log('columns............................................................');
    }
  }
  get columns(): TableConfig.IColumn[] {
    return this._columns;
  }
  private _dataSource: any[] = [];
  @Input() set dataSource(value: any[]) {
    if (value) {
      this._dataSource = value;
      console.log('dataSource............................................................');
    }
  }
  get dataSource(): any[] {
    return this._dataSource;
  }
  //#endregion

  //#region lifecycle hook Methods
  ngOnInit(): void {
    //NGRX
    // .pipe(takeUntil(this.ngUnsubscribe$))

  }
  ngAfterViewInit() {

  }
  ngOnDestroy() {
    // this.ngUnsubscribe$.next();
    // this.ngUnsubscribe$.complete();
  }
  //#endregion

  //#region HTML Events

  //#endregion

  //#region Api Methods

  //#endregion

  //#region Private Methods

  //#endregion
}
