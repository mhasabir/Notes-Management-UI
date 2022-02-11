import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IUser, IUserRegistration, UserRegistration } from '../../models/login.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  //#region Variables Declaration
  public userForm: FormGroup;
  public userRegistration: IUserRegistration = new UserRegistration();
  public submitted = false;

  protected ngUnsubscribe$: Subject<void> = new Subject<void>();

  //#endregion

  //#region Constructor
  constructor(
    private fb: FormBuilder,
    private _userService: UserService
  ) {

  }
  //#endregion

  //#region Input & Output

  //#endregion

  //#region lifecycle hook Methods
  ngOnInit(): void {
    this.buildForm();
    this.setProperties();
  }
  ngOnDestroy() {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
  //#endregion

  //#region HTML Events
  public get bForm() {
    return this.userForm.controls;
  }
  public save() {
    this.submitted = true;
    // if (this.userForm.invalid) {
    //   this.submitted = false;
    //   Object.keys(this.userForm.controls).forEach(field => {
    //     const control = this.userForm.get(field);
    //     control?.markAsTouched({ onlySelf: true });
    //   });
    //   return;
    // }
    this.registerUser(this.userRegistration)
  }
  //#endregion

  //#region Api Methods
  private registerUser(userRegistration: IUserRegistration): void {
    this._userService.post(userRegistration).pipe(takeUntil(this.ngUnsubscribe$)).subscribe((res: IUser) => {
      if (res) {
        console.log(res);
      }
    }, (err => {
      console.log('action cannot perform, something went wrong!');
    }));
  }
  //#endregion

  //#region Private Methods
  private buildForm() {
    this.userForm = this.fb.group({
      name: [
        this.userRegistration?.name,
        [Validators.required, Validators.minLength(1), Validators.maxLength(100)],
      ],
      email: [
        this.userRegistration?.email,
        [Validators.required, Validators.email],
      ],
      dateOfBirth: [
        this.userRegistration?.dateOfBirth,
        [Validators.required],
      ],
      password: [
        this.userRegistration?.password,
        [Validators.required, Validators.minLength(6)],
      ],
      confirmPassword: [
        this.userRegistration?.confirmPassword,
        [Validators.required, Validators.minLength(6)],
      ],
    });
  }
  private setProperties() {
    this.userForm.get('name')?.valueChanges.subscribe(val => {
      this.userRegistration.name = val;
    });
    this.userForm.get('email')?.statusChanges.subscribe(val => {
      this.userRegistration.email = val;
    });
    this.userForm.get('dateOfBirth')?.statusChanges.subscribe(val => {
      this.userRegistration.dateOfBirth = val;
    });
    this.userForm.get('password')?.statusChanges.subscribe(val => {
      this.userRegistration.password = val;
    });
    this.userForm.get('confirmPassword')?.statusChanges.subscribe(val => {
      this.userRegistration.confirmPassword = val;
    });
  }
  //#endregion
}
