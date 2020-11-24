import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
import { HardcodeAuthenticationService } from './hardcode-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodeAuthenticationService:HardcodeAuthenticationService,
              private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.hardcodeAuthenticationService.isLoggedUser()){
      console.log("login is pass");
      return true;
    }
    
    else {
      console.log("logi is failed");
    this.router.navigate(['login']);
    return false;
  }
  }
}
