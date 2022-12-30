import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login-service/login.service";

export interface basicData{
  position: string;
  name: string|null;
  weight: string;
  symbol: string|null;
}

const BASIC_DATA: basicData[] = [
  {position: 'First Name:', name: 'Tomasz', weight: 'Surname:', symbol: 'Wójtowicz'},
  {position: "Date of birth:", name: "1844-10-15", weight: "Place of birth:", symbol: "unknown"},
  {position: "Name of the Father:", name: "Carl", weight: "PESEL:", symbol: "12345678901"}
];

const CONTACT_DATA: basicData[] = [
  {position: 'Street:', name: localStorage.getItem("street")!=null? localStorage.getItem("street"): "Some st.",
    weight: 'City:', symbol: localStorage.getItem("city")!=null? localStorage.getItem("city"): "Łódź"},
  {position: "House No.:", name: localStorage.getItem("house")!=null? localStorage.getItem("house"): "007",
    weight: "Voivodeship:", symbol: localStorage.getItem("voi")!=null? localStorage.getItem("voi"): "łódzkie"},
  {position: "Apartment No.:", name: localStorage.getItem("appartment")!=null? localStorage.getItem("appartment"): "999",
    weight: "Postcode:", symbol: localStorage.getItem("postcode")!=null? localStorage.getItem("postcode"): "S12-345"},
  {position: "Phone:", name: localStorage.getItem("phone")!=null? localStorage.getItem("phone"): "+48 123-123-123",
    weight:"Contact Data confirmed:", symbol:"No"}
];


@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  loggedIn: boolean | undefined;
  basicColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  basicSource = BASIC_DATA;
  contactSource = CONTACT_DATA;
  constructor(private loginService: LoginService) {
    this.loginService.loggedIn.subscribe(state => this.loggedIn = state);
  }

  ngOnInit(): void {
    this.loginService.loggedIn.subscribe(state => this.loggedIn = state);
  }

  updateData(street: HTMLInputElement, city: HTMLInputElement, house: HTMLInputElement,
             voi: HTMLInputElement, appartment: HTMLInputElement, postcode: HTMLInputElement,
             phone: HTMLInputElement){
    localStorage.setItem("street", street.value);
    localStorage.setItem("city", city.value);
    localStorage.setItem("house", house.value);
    localStorage.setItem("voi", voi.value);
    localStorage.setItem("postcode", postcode.value);
    localStorage.setItem("phone", phone.value);
    document.location.reload();
  }
}
