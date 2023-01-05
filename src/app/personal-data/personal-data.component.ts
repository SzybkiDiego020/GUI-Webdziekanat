import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login-service/login.service";

export interface basicData{
  entry1: string;
  value1: string|null;
  entry2: string;
  value2: string|null;
}

const BASIC_DATA: basicData[] = [
  {entry1: 'First name:', value1: 'Tomasz', entry2: 'Surname:', value2: 'Wójtowicz'},
  {entry1: "Date of birth:", value1: "1844-10-15", entry2: "Place of birth:", value2: "unknown"},
  {entry1: "Name of the Father:", value1: "Carl", entry2: "PESEL:", value2: "12345678901"}
];

const CONTACT_DATA: basicData[] = [
  {entry1: 'Street:', value1: localStorage.getItem("street")!=null? localStorage.getItem("street"): "Some st.",
    entry2: 'City:', value2: localStorage.getItem("city")!=null? localStorage.getItem("city"): "Łódź"},
  {entry1: "House No.:", value1: localStorage.getItem("house")!=null? localStorage.getItem("house"): "007",
    entry2: "Voivodeship:", value2: localStorage.getItem("voi")!=null? localStorage.getItem("voi"): "łódzkie"},
  {entry1: "Apartment No.:", value1: localStorage.getItem("apartment")!=null? localStorage.getItem("apartment"): "999",
    entry2: "Postcode:", value2: localStorage.getItem("postcode")!=null? localStorage.getItem("postcode"): "12-345"},
  {entry1: "Phone:", value1: localStorage.getItem("phone")!=null? localStorage.getItem("phone"): "+48 123-123-123",
    entry2:"Contact Data confirmed:", value2:"No"}
];


@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  loggedIn: boolean | undefined;
  basicColumns: string[] = ['entry1', 'value1', 'entry2', 'value2'];
  basicSource = BASIC_DATA;
  contactSource = CONTACT_DATA;
  constructor(private loginService: LoginService) {
    this.loginService.loggedIn.subscribe(state => this.loggedIn = state);
  }

  ngOnInit(): void {
    this.loginService.loggedIn.subscribe(state => this.loggedIn = state);
  }

  updateData(street: HTMLInputElement, city: HTMLInputElement, house: HTMLInputElement,
             voi: HTMLInputElement, apartment: HTMLInputElement, postcode: HTMLInputElement,
             phone: HTMLInputElement){
    localStorage.setItem("street", street.value);
    localStorage.setItem("city", city.value);
    localStorage.setItem("house", house.value);
    localStorage.setItem("voi", voi.value);
    localStorage.setItem("apartment", apartment.value);
    localStorage.setItem("postcode", postcode.value);
    localStorage.setItem("phone", phone.value);
    document.location.reload();
  }
}
