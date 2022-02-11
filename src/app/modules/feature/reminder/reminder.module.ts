import { NgModule } from '@angular/core';

import { ReminderRoutingModule } from './reminder-routing.module';
import { ReminderComponent } from './reminder.component';
import { CreateUpdateReminderComponent } from './components/create-update-reminder/create-update-reminder.component';
import { ReminderListComponent } from './components/reminder-list/reminder-list.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ReminderComponent,
    CreateUpdateReminderComponent,
    ReminderListComponent
  ],
  imports: [
    SharedModule,
    ReminderRoutingModule
  ]
})
export class ReminderModule { }
