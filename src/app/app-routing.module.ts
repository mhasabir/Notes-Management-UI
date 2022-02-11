import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { SystemComponent } from './modules/core/components/system/system.component';

const routes: Routes = [
  {
    path: "",
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: "login",
        loadChildren: () => import("./modules/feature/login/login.module").then(m => m.LoginModule),
      },
      {
        path: "app",
        canActivate: [AuthenticationGuard],
        canActivateChild: [AuthenticationGuard],
        component: SystemComponent,
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          {
            path: "dashboard",
            loadChildren: () => import("./modules/feature/dashboard/dashboard.module").then(m => m.DashboardModule),
          },
          {
            path: "regular-note",
            loadChildren: () => import("./modules/feature/regular-note/regular-note.module").then(m => m.RegularNoteModule),
          },
          {
            path: "reminder",
            loadChildren: () => import("./modules/feature/reminder/reminder.module").then(m => m.ReminderModule),
          },
          {
            path: "todo",
            loadChildren: () => import("./modules/feature/todo/todo.module").then(m => m.TodoModule),
          },
          {
            path: "bookmark",
            loadChildren: () => import("./modules/feature/bookmark/bookmark.module").then(m => m.BookmarkModule),
          },
        ],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
