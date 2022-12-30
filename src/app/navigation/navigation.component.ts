import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login-service/login.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  loggedIn: boolean | undefined;
  constructor(private loginService: LoginService) {
    this.loginService.loggedIn.subscribe(state => this.loggedIn = state);
  }

  ngOnInit(): void {
    this.loginService.loggedIn.subscribe(state => this.loggedIn = state);
  }

}
