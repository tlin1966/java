import { Component, OnInit } from '@angular/core';
import { ToDataService } from '../service/data/to-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number
  username:string
  todo:Todo
  constructor(
    private todoService:ToDataService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    //to init the todo to avoid the properity no found.
    this.todo = new Todo(this.id,null,false,null);
    //this.username = this.route.snapshot.params['username'];
    if(this.id >=0){
    this.todoService.retriveTodo('tlin',this.id).subscribe(      
      response=>this.todo=response 
    )
    }
  }
  saveData(){
    console.log("Save function");
    if(this.id <=0){
      this.todoService.addTodo('tlin', this.todo).subscribe(      
        response=>console.log(response)    
      )
      this.router.navigate(['todo']);
    }
    else{
      this.todoService.updateTodo('tlin',this.id, this.todo).subscribe(      
      response=>console.log(response)    
    )
    this.router.navigate(['todo']);
    }
  }
}
