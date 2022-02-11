import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReminderListComponent } from './components/reminder-list/reminder-list.component';
import { ReminderComponent } from './reminder.component';

const routes: Routes = [
  {
    path: "", component: ReminderComponent,
    children: [
      { path: '', component: ReminderListComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReminderRoutingModule { }
