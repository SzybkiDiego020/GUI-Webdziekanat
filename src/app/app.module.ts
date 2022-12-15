import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { AppHeaderComponent } from './app-header/app-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { CollegeDataComponent } from './college-data/college-data.component';
import { ReportCardComponent } from './report-card/report-card.component';
import { FeesComponent } from './fees/fees.component';
import { RegistrationComponent } from './registration/registration.component';


const appRoutes: Routes = [
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'information', component: InformationComponent},
  {path: 'personal_data', component: PersonalDataComponent},
  {path: 'college_data', component: CollegeDataComponent},
  {path: 'report_card', component: ReportCardComponent},
  {path: 'fees', component: FeesComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '***',   component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    HomeComponent,
    InformationComponent,
    PersonalDataComponent,
    CollegeDataComponent,
    ReportCardComponent,
    FeesComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
