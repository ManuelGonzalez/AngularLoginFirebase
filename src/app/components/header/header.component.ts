import { Component, OnInit } from '@angular/core';
import {LoginUserService} from '../../services/login-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginuser : LoginUserService) { }

  ngOnInit() {
  }

}
