import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';
import {HomeComponent} from "./home/home.component";
import {AppointmentComponent} from "./appointment/appointment.component";

const routes: Routes = [

  { path: '', component: PatientComponent,
    children:[
      {path: '', component:HomeComponent},
      {path:'appointment', component:AppointmentComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
