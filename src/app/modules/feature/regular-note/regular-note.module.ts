import { NgModule } from '@angular/core';

import { RegularNoteRoutingModule } from './regular-note-routing.module';
import { RegularNoteComponent } from './regular-note.component';
import { CreateUpdateRegularNoteComponent } from './components/create-update-regular-note/create-update-regular-note.component';
import { RegularNoteListComponent } from './components/regular-note-list/regular-note-list.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    RegularNoteComponent,
    CreateUpdateRegularNoteComponent,
    RegularNoteListComponent
  ],
  imports: [
    SharedModule,
    RegularNoteRoutingModule
  ]
})
export class RegularNoteModule { }
