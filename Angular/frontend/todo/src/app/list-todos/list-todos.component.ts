import { Component, OnInit } from '@angular/core';
import { ToDataService } from '../service/data/to-data.service';
import { ActivatedRoute, Router } from '@angular/router';

export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){

  }

}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos : Todo[];
  username = ''
  message = ''
  // [
  //   new Todo (1,'Learning how to dance',false,new Date()),
  //   new Todo (2,'Learning how to study',false,new Date()),
  //   new Todo (3,'Learning how to dream',false,new Date())
  // ]


  // GET /user/{userName}/todos
  // DELETE /user/{userName}/todos/{to_id}
  // PUT /user/{userName}/todos/{to_id}
  // POST /user/{userName}/todos/{to_id}

  //   {
  //   id : 1,
  //   description: 'Learn how to dance'
  // },
  // {
  //   id : 2,
  //   description: 'Learn how to study'
  // }

  
  constructor(
    private todoService:ToDataService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    //this.username = this.route.snapshot.params['username']
    this.refreshPage();
    
  }
  refreshPage(){
    this.todoService.exectuteTodoParameter('tlin').subscribe(
      
      responseResulst=>{
        //console.log(responseResulst);
        this.todos=responseResulst;
        //pass error to method
      }
        
    )
  }
  deleteTodo(id){
    console.log('I am here 2');
    this.todoService.deletTodoByID('tlin',id).subscribe(
      
      responseResulst=>{
        console.log(`id is ${id}`);
        this.message=`Delete ID ${id} is successful`;
        this.refreshPage();
      }
        
    )
  }
  updateTodo(id){
    this.router.navigate(['todo',id])
  }
  addTodo(){
    this.router.navigate(['todo',-1])
  }

}
