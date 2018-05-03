import { Component, OnInit } from '@angular/core';
import {LoginUserService} from '../../services/login-user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private loginUser: LoginUserService) {
    this.loginUser.getUserProfile();
  }

  logout() {
    this.loginUser.logout();
  }
}
