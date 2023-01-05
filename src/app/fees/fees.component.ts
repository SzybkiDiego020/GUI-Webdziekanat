import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login-service/login.service";

export interface basicData{
  entry1: string;
  value1: string|null;
  entry2: string;
  value2: string|null;
}

export interface paymentData {
  date: string;
  for_a_semester: string;
  amount: string;
  paid: string;
  remaining: string;
  before: string;
  interests: string;
  description: string;
}

const FEES_DATA: basicData[] = [
  {entry1: 'Faculty:', value1: 'International Cooperation Centre', entry2: 'For 1 point:', value2: 'No data'},
  {entry1: "Course", value1: "Computer Science", entry2: "Basic for repetition:", value2: "No data"},
  {entry1: "Mode of study:", value1: "stationary", entry2: "Max per semester:", value2: "No data"}
];

const PAYMENT_DATA: paymentData[] = [
  {date:"2020-10-31", for_a_semester:"2020/21 Z.s.1", amount: "22 PLN", paid: "22 PLN", remaining:"0 PLN", before:"yes", interests:"0 PLN",
  description:"Card"}
]

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {

  loggedIn: boolean | undefined;

  basicColumns: string[] = ['entry1', 'value1', 'entry2', 'value2'];
  paymentColumns: string[] = ['date', 'for_a_semester', 'amount', 'paid', 'remaining', 'before', 'interests', 'description'];
  feesSource = FEES_DATA;
  paymentSource = PAYMENT_DATA;
  constructor(private loginService: LoginService) {
    this.loginService.loggedIn.subscribe(state => this.loggedIn = state);
  }

  ngOnInit(): void {
    this.loginService.loggedIn.subscribe(state => this.loggedIn = state);
  }

}
