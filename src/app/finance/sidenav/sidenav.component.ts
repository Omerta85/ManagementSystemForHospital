import {Component, OnInit} from '@angular/core';
import {faMoneyBill, faSignOutAlt, faUser, faReceipt} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faUser=faUser;
  logout=faSignOutAlt;
  bills=faMoneyBill;
  receipts=faReceipt;

}
