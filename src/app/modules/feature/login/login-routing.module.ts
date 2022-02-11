import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
    children: [
      { path: '', component: UserLoginComponent },
      { path: 'registration', component: UserRegistrationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
