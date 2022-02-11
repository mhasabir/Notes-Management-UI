import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from './bookmark.component';
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';

const routes: Routes = [
  {
    path: "", component: BookmarkComponent,
    children: [
      { path: '', component: BookmarkListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarkRoutingModule { }
