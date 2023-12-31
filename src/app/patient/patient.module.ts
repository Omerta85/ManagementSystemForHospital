import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ChartModule} from "angular-highcharts";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    PatientComponent,
    SidenavComponent,
    HomeComponent,
    AppointmentComponent,
  ],
  exports: [
    HomeComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FontAwesomeModule,
    ChartModule,
    NgxPaginationModule
  ]
})
export class PatientModule { }
