import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class WelcomeBean{
  constructor (private message:string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

constructor(
    private http:HttpClient
  ) { }

  exectuteWelcomeData(){
    return this.http.get<WelcomeBean>("http://localhost:8080/hello-world-bean");
   // return 'Welcome to this page';
  }
  // pass the path with parameter /hello-world/{name}
  exectuteWelcomeDataWithParameter(name){
    let basicAuthHeaderString = this.createBasicAuthenitcationHttpHeader();
    let headers = new HttpHeaders ({
      Authorization:basicAuthHeaderString
    })
    //return console.log(header);
    //console.log(header);
    return this.http.get<WelcomeBean>(`http://localhost:8080/hello-world/${name}`,{headers:headers});
   // return 'Welcome to this page';
  }
  createBasicAuthenitcationHttpHeader (){
    let username = 'tlin';
    let password ='tlin';
    let authenticated = 'Basic ' + window.btoa(username + ':' + password);
    //console.log (authenticated);
    return authenticated;
  }
}
//Access to XMLHttpRequest at 'http://localhost:8080/hello-world-bean' 
//from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.