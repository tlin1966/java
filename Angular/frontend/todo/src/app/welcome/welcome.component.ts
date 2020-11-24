import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
//ActivatedRoute
  name = '';
  weclomeMessageFromBean:String;
  constructor(
    private route:ActivatedRoute,
    private myservice:WelcomeDataService) { }

  ngOnInit(): void {
  this.name = this.route.snapshot.params['name']
  }
  executeWelcome(){
    console.log('I am here 1');
    //console.log(this.myservice.exectuteWelcomeData());
    this.myservice.exectuteWelcomeData().subscribe(
      //pass response to method
     responseResulst=>this.getResponse(responseResulst),
      //pass error to method
      error=>this.getErrorResponse(error)
    
    );
    console.log('I am here 2');
    }
    executeWelcomeWithParameter(){
      //console.log(this.name);
      //console.log(this.myservice.exectuteWelcomeData());
      this.myservice.exectuteWelcomeDataWithParameter(this.name).subscribe(
        //pass response to method
       responseResulst=>this.getResponse(responseResulst),
        //pass error to method
        error=>this.getErrorResponse(error)
      
      );
      console.log('I am here 4');
      }
    
      createBasicAuthenitcationHttpHeader (){
        this.myservice.exectuteWelcomeDataWithParameter('tlin');
      }
    getResponse(response){
      //console.log(response);
      //console.log(response.message);
      this.weclomeMessageFromBean=response.message;
    
  }
  getErrorResponse(response){
    //console.log("response below");
    //console.log(response);
    //console.log("response error below");
    //console.log(response.error.message);
    //console.log("response End");
    this.weclomeMessageFromBean=response.error.message;
  
}
}

