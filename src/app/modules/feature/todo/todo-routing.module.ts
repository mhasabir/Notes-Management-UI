import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './todo.component';

const routes: Routes = [
  {
    path: "", component: TodoComponent,
    children: [
      { path: '', component: TodoListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
