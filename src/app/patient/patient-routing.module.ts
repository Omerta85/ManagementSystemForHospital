import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';
import {HomeComponent} from "./home/home.component";
import {AppoitmentComponent} from "./appoitment/appoitment.component";

const routes: Routes = [

  { path: '', component: PatientComponent,
    children:[
      {path: '', component:HomeComponent},
      {path:'appointment', component:AppoitmentComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
