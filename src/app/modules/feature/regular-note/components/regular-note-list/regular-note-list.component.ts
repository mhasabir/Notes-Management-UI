import { Component, OnInit } from '@angular/core';
import { TableConfig } from 'src/app/modules/shared/table/table.model';

@Component({
  selector: 'app-regular-note-list',
  templateUrl: './regular-note-list.component.html',
  styleUrls: ['./regular-note-list.component.scss']
})
export class RegularNoteListComponent implements OnInit {

 //#region Variables Declaration
 public columns: TableConfig.IColumn[] = [
  new TableConfig.Column('sl', { header: 'S/N' }),
  new TableConfig.Column('regNo', { header: 'Reg.No' }),
  new TableConfig.Column('name', { header: 'Name' }),
  new TableConfig.Column('age', { header: 'Age' }),
  new TableConfig.Column('reason', { header: 'Reason' }),
  new TableConfig.Column('doctor', { header: 'Doctor' }),
  new TableConfig.Column('status', { header: 'Status' }),
  new TableConfig.Column('action', { header: 'Action' }),
];
public dataSource: any[] = [

];

// protected ngUnsubscribe$: Subject<void> = new Subject<void>();

//#endregion

//#region Constructor
constructor() {
  let data: any =     {
    sl:'1',
    regNo:'1020',
    name:'RP',
    age:'15',
    reason:'Text of reason',
    doctor:'doctor name',
    status:'Pending',
    action:'',
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
