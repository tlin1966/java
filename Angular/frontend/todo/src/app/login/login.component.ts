import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'tlin'
  password = ''
  showError = false
  errorMessage = 'InValid Authentication'
  //redirect
  constructor(
    private router: Router, 
    private hardcodeAuthenticate:HardcodeAuthenticationService,
    private basicAuthenticationService:BasicAuthenticationService
    ) { }

  ngOnInit(): void {
  }

  handleLogin (){
    
    if (this.hardcodeAuthenticate.authenticate(this.username,this.password)){
      this.showError = false;
      this.router.navigate(['welcome',this.username]);
    }else{
      this.showError = true;
      
    }
  }

  handleBasicAuthLogin (){
    
    
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log('session is ' + sessionStorage.getItem('authenticaterUser'))
            console.log(data)            
            this.router.navigate(['welcome', this.username]);
            this.showError = false      
          },
          error => {
            console.log(error)
            this.showError = true
          }
        )
  }
  
  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.showError = false      
          },
          error => {
            console.log(error)
            this.showError = true
          }
        )
  }
}
