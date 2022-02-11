import { NgModule } from '@angular/core';

import { BookmarkRoutingModule } from './bookmark-routing.module';
import { BookmarkComponent } from './bookmark.component';
import { CreateUpdateBookmarkComponent } from './components/create-update-bookmark/create-update-bookmark.component';
import { BookmarkListComponent } from './components/bookmark-list/bookmark-list.component';
import { SharedModule } from '../../shared/shared.module';
import { BookmarkService } from './services/bookmark.service';


@NgModule({
  declarations: [
    BookmarkComponent,
    CreateUpdateBookmarkComponent,
    BookmarkListComponent
  ],
  imports: [
    SharedModule,
    BookmarkRoutingModule
  ],
  providers: [BookmarkService]
})
export class BookmarkModule { }
