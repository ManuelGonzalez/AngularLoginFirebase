import { Component, OnInit } from '@angular/core';
import {LoginUserService} from '../../services/login-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginUser: LoginUserService) {

  }

  ngOnInit() {
  }

  loginFacebook() {
    this.loginUser.loginFacebook();
  }

  loginGoogle() {
    this.loginUser.loginGoogle();
  }

  logout() {
    this.loginUser.logout();
  }
}
