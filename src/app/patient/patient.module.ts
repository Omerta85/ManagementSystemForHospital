import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { AppoitmentComponent } from './appoitment/appoitment.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    PatientComponent,
    SidenavComponent,
    HomeComponent,
    AppoitmentComponent,
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FontAwesomeModule
  ]
})
export class PatientModule { }
