import {Component, OnInit} from '@angular/core';
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor() {
  }
  p: number = 1;
  collection: any[] = [1,2];
  close:boolean=false;
  ngOnInit() {
  }
  showAddTreat(){
    this.close=!this.close;
  }
}
