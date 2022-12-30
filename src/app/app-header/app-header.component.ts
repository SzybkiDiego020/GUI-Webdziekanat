import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoginService} from "../login-service/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  loggedIn: boolean | undefined;
  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginService.loggedIn.subscribe(state => this.loggedIn = state);
  }

  changeLoggedInState() {
    if(this.loggedIn && !(location.href.includes("information") ||
      location.href.includes("registration") || location.href.includes("home"))){document.location.href="http://localhost:4200/home"}
    this.loginService.changeLoggedIn(!this.loggedIn);
  }

}
