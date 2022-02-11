import { NgModule } from '@angular/core';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { CreateUpdateTodoComponent } from './components/create-update-todo/create-update-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    TodoComponent,
    CreateUpdateTodoComponent,
    TodoListComponent
  ],
  imports: [
    SharedModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
