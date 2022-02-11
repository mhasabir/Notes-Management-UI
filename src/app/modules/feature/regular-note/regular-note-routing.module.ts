import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegularNoteListComponent } from './components/regular-note-list/regular-note-list.component';
import { RegularNoteComponent } from './regular-note.component';

const routes: Routes = [
  {
    path: "", component: RegularNoteComponent,
    children: [
      { path: '', component: RegularNoteListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegularNoteRoutingModule { }
