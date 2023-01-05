import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login-service/login.service";

export interface subjectsData {
  code: string;
  name: string;
  instructor: string;
  ects: number;
  final_grade: string;
}

export interface semesterData {
  average_grade: number;
  points: number;
}

export interface dropDownData {
  value: number;
  text: string;
}

const SEMESTER_DATA: semesterData[] = [
  {average_grade: 4.5, points: 30},
  {average_grade: 4.65, points: 30},
  {average_grade: 4.47, points:30}
]

const Z2021: subjectsData[] = [
  {code: "22 911620 10", name: "Academic English for Engineers 1", instructor: "mgr Khalid Ouzguid", ects: 3, final_grade: "1"},
  {code: "00 860001 00", name: "BHP", instructor: "dr inż. Katarzyna Boczkowska", ects: 0, final_grade: "passed"},
  {code: "02 056304 01", name: "Electrical & Electronic Engineering", instructor: "dr inż. Marek Ossowski", ects: 4, final_grade: "2"},
  {code: "04 510043 05", name: "Engineering Drawing", instructor: "dr inż. Tomasz Saryusz-Wolski", ects: 2, final_grade: "3"},
  {code: "02 035901 01", name: "Intro. to Computer Science", instructor: "dr hab. inż. Lidia Jackowska-Strumiłło", ects: 5, final_grade: "4"},
  {code: "02 035902 00", name: "Introduction to Operating Systems", instructor: "dr hab. inż. Andrzej Romanowski", ects: 1, final_grade: "5"},
  {code: "21 011287 00", name: "mathematics 1", instructor: "dr inż. Jakub Szczepaniak", ects: 8, final_grade: "6"},
  {code: "07 011110 20", name: "Physics", instructor: "dr inż. Bogdan Żółtowski", ects: 3, final_grade: "7"},
  {code: "02 516075 01", name: "Scripting Languages", instructor: "dr inż. Witold Marańda", ects: 3, final_grade: "8"},
  {code: "22 911552 00", name: "Study Skills for University", instructor: "mgr Joanna Miłosz-Bartczak", ects: 1, final_grade: "9"},
  {code: "00 860002 00", name: "Library training", instructor: "mgr inż. Izabela Gajda", ects: 0, final_grade: "passed"},
  {code: "00 860003 00", name: "Training in the elements of law on higher education", instructor: "mgr Iwona Sagańska", ects: 0, final_grade: "passed"}
];

const L2021: subjectsData[] = [
  {code: "22 911620 20", name: "Academic English for Engineers 2", instructor: "mgr Iwona Wróblewska", ects: 1, final_grade: "1"},
  {code: "02 535186 00", name: "Algorithms & Data Structures", instructor: "dr hab. Szymon Grabowski", ects: 5, final_grade: "2"},
  {code: "22 911553 10", name: "Civic Knowledge and Engagement 1", instructor: "mgr Iwona Wróblewska", ects: 1, final_grade: "3"},
  {code: "02 566225 01", name: "Computer Networks", instructor: "dr inż. Artur Sierszeń", ects: 4, final_grade: "4"},
  {code: "22 911550 00", name: "Introduction to PBL", instructor: "mgr Iwona Wróblewska", ects: 1, final_grade: "5"},
  {code: "22 922501 10", name: "German A0-A1 b.1 (a)", instructor: "mgr Dominika Gola", ects: 3, final_grade: "7"},
  {code: "21 011288 01", name: "Mathematics 2", instructor: "dr inż. Jakub Szczepaniak", ects: 8, final_grade: "8"},
  {code: "07 011205 20", name: "Modern Physics", instructor: "dr inż. Andrzej Brozi", ects: 3, final_grade: "9"},
  {code: "02 526414 01", name: "Programming & Data Structures", instructor: "dr inż. Grzegorz Jabłoński", ects: 4, final_grade: "10"},
  {code: "23 923111 10", name: "Physical Education", instructor: "mgr Tomasz Piasecki", ects: 0, final_grade: "passed"}
];

const Z2122: subjectsData[] = [
  {code: "22 911620 30", name: "Academic English for Engineers 3", instructor: "mgr Iwona Wróblewska", ects: 1, final_grade: "1"},
  {code: "22 911553 20", name: "Civic Knowledge and Engagement 2", instructor: "mgr Iwona Wróblewska", ects: 2, final_grade: "2"},
  {code: "02 596331 00", name: "Databases", instructor: "prof. dr hab. inż. Adam Pelikant", ects: 4, final_grade: "3"},
  {code: "02 406186 00", name: "Digital Systems 1", instructor: "dr inż. Piotr Dębiec", ects: 3, final_grade: "4"},
  {code: "02 966177 00", name: "Interdisciplinary PBL Project", instructor: "dr hab. Laurent Babout", ects: 5, final_grade: "5"},
  {code: "02 516976 00", name: "Java Fundamentals", instructor: "dr inż. Bartosz Sakowicz", ects: 3, final_grade: "6"},
  {code: "22 922501 20", name: "German A0-A1 b.2 (a)", instructor: "--- Agnieszka Świca", ects: 3, final_grade: "7"},
  {code: "21 011289 01", name: "Mathematics 3", instructor: "dr inż. Jakub Szczepaniak", ects: 3, final_grade: "8"},
  {code: "02 046128 00", name: "Numerical Methods", instructor: "dr Łukasz Pietrzak", ects: 2, final_grade: "9"},
  {code: "02 516077 00", name: "Object Oriented Programm. in C++", instructor: "dr inż. Grzegorz Jabłońsk", ects: 4, final_grade: "10"},
  {code: "23 923111 20", name: "Physical Education 2", instructor: "mgr Marcin Laśkiewicz", ects: 0, final_grade: "passed"},
  {code: "00 860005 00", name: "Managing scientific information", instructor: "mgr Izabela Olejnik", ects: 0, final_grade: "passed"}
];

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent implements OnInit {

  loggedIn: boolean | undefined;

  semester = 3;
  semesterSource = SEMESTER_DATA;

  subjectColumns = ['code', 'name', 'instructor', 'ects', 'final_grade'];

  all_semesters = [Z2021, L2021, Z2122];
  current_semester_data = this.all_semesters[0];

  dropDownSource: dropDownData[] = [
    {value: 1, text: "2020/21 Z - 1"},
    {value: 2, text: "2020/21 L - 2"},
    {value: 3, text: "2021/22 Z - 3"},
  ]
  constructor(private loginService: LoginService) {
    this.loginService.loggedIn.subscribe(state => this.loggedIn = state);
  }

  ngOnInit(): void {
    this.loginService.loggedIn.subscribe(state => this.loggedIn = state);
  }

  onOptionsSelected(value: string){
    this.semester = Number(value);
    this.current_semester_data = this.all_semesters[Number(value)-1];
  }

}
