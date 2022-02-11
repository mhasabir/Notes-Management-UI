import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SystemComponent } from './modules/core/components/system/system.component';
import { CoreModule } from './modules/core/core.module';
import { HttpLocalClientService } from './services/http-local-client.service';
@NgModule({
  declarations: [
    AppComponent,
    SystemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [HttpLocalClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
