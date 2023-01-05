import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login-service/login.service";

export interface basicData{
  entry1: string;
  value1: string|null;
  entry2: string;
  value2: string|null;
}

const GENERAL_DATA: basicData[] = [
  {entry1: 'Faculty:', value1: 'International Faculty of Engineering', entry2: 'Mode of study:', value2: 'stationary'},
  {entry1: "Course", value1: "Computer Science", entry2: "Length of studies:", value2: "3.5"},
  {entry1: "Specialty:", value1: "n/a", entry2: "Main course of studies:", value2: "true"},
  {entry1: "Is main index set:", value1: "yes", entry2: "Main index", value2: "234693"}
];

const VALID_DATA: basicData[] = [
  {entry1: 'Current year:', value1: '3', entry2: 'Academic semester:', value2: '2022/23 Z'},
  {entry1: "Current semester:", value1: "5", entry2: "Status:", value2: "FULL REGISTRATION"},
  {entry1: "Annual registration:", value1: "full", entry2: "Semester qualification:", value2: "positive"}
];

const AVERAGE_DATA: basicData[] = [
  {entry1: 'Accepted:', value1: '0.0', entry2: 'Accepted:', value2: '0'},
  {entry1: "For a semester:", value1: "0.0", entry2: "Gained/Nominal", value2: "120/150"},
  {entry1: "For complete studies:", value1: "4.55", entry2: "", value2: ""}
];

@Component({
  selector: 'app-college-data',
  templateUrl: './college-data.component.html',
  styleUrls: ['./college-data.component.css']
})
export class CollegeDataComponent implements OnInit {
  loggedIn: boolean | undefined;

  basicColumns: string[] = ['entry1', 'value1', 'entry2', 'value2'];
  generalSource = GENERAL_DATA;
  validSource = VALID_DATA;
  averageSource = AVERAGE_DATA;
  constructor(private loginService: LoginService) {
    this.loginService.loggedIn.subscribe(state => this.loggedIn = state);
  }

  ngOnInit(): void {
    this.loginService.loggedIn.subscribe(state => this.loggedIn = state);
  }

}
