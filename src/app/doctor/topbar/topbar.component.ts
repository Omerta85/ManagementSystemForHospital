import {Component, OnInit} from '@angular/core';
import {faSignOutAlt, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit{
  constructor() {
  }

  faUser=faUser;
  logout=faSignOutAlt;

  ngOnInit() {
  }

}
