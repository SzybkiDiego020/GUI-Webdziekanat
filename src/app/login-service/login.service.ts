import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLoggedInSource = new BehaviorSubject(false);
  loggedIn = this.isLoggedInSource.asObservable();
  constructor() {
    this.changeLoggedIn(localStorage.getItem("id") == "yes");
  }

  changeLoggedIn(state: boolean){
    this.isLoggedInSource.next(state);
    localStorage.setItem("id", state? "yes":"no");
  }

}
