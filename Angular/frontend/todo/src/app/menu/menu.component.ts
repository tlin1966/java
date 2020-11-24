import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //private isAuthenticed=false;
  constructor(public hardcodeAuthenticationService:HardcodeAuthenticationService) {
    
   }

  ngOnInit(): void {
    //this.isAuthenticed = this.hardcodeAuthenticationService.isLoggedUser();
  }

}
