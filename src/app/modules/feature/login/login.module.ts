import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    LoginComponent,
    UserLoginComponent,
    UserRegistrationComponent
  ],
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  providers:[UserService]
})
export class LoginModule { }
