import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }

  authenticate (username, password){
    console.log('before login ' + this.isLoggedUser());
    if (username === 'tlin' && password === 'tlin'){
      sessionStorage.setItem('authenticaterUser',username);
      console.log('After login ' + this.isLoggedUser());
      return true;
    }
    return false;
  }

  isLoggedUser(){
    let user= sessionStorage.getItem('authenticaterUser');
    //console.log('user is ' + user);
    //console.log('user is ' + !(user===null));
    return !(user===null);
  }
}
