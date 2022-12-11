import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  loggedIn: boolean = true;

  @Output() changeLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  changeLoggedInState() {
    this.loggedIn = !this.loggedIn;
    this.changeLoggedIn.emit((this.loggedIn));
    window.location.reload();
  }

}
