import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  public onLoginClicked(): void {
    this._router.navigate(['app']);
  }
}
