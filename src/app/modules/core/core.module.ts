import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
