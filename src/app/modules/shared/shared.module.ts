import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from './table/table.module';

@NgModule({
  declarations: [
  ],
  imports: [
    TableModule
  ],
  exports:[
    CommonModule,
    TableModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
