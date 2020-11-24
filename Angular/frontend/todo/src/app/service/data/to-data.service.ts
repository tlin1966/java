import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ToDataService {

  constructor(
    private http:HttpClient
  ) { }

  exectuteTodoParameter(username){
    
    //console.log(name)
    return this.http.get<Todo[]>(`${API_URL}/user/${username}/todos`);
   // return 'Welcome to this page';
  }
  deletTodoByID (username,id){
    return this.http.delete(`${API_URL}/user/${username}/todos/${id}`);
  }
  retriveTodo (username,id){
    return this.http.get<Todo>(`${API_URL}/user/${username}/todos/${id}`);
  }
  updateTodo (username,id, todo){
    return this.http.put(`${API_URL}/user/${username}/todos/${id}`,todo);
  }
  addTodo (username, todo){
    return this.http.post(`${API_URL}/user/${username}/todos/`,todo);
  }
}
