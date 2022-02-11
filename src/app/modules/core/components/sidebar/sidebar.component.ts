import { Component, OnInit } from '@angular/core';
import { ISidebarItem, SidebarItem } from '../../models/core.model';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  //#region Variables Declaratio
  public sidebarItems: ISidebarItem[] = [];
  //#endregion

  //#region Constructor
  constructor() {

  }
  //#endregion

  //#region Input & Output

  //#endregion

  //#region lifecycle hook Methods
  ngOnInit(): void {
    this.sidebarItems = [
      new SidebarItem(1, 'Dashboard', 'fa fa-home', 'dashboard'),
      new SidebarItem(2, 'Regular Note', 'fa fa-user', 'regular-note'),
      new SidebarItem(3, 'Reminder', 'fa fa-user-plus', 'reminder'),
      new SidebarItem(4, 'Todo', 'fa fa-table', 'todo'),
      new SidebarItem(5, 'Bookmark', 'fa fa-hospital-o', 'bookmark'),
    ];
  }
  ngAfterViewInit() {

  }
  ngOnDestroy() {

  }
  //#endregion

  //#region HTML Events

  //#endregion

  //#region Api Methods

  //#endregion

  //#region Private Methods

  //#endregion
}
