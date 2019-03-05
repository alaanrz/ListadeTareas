import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' ;
import { Task } from '../models/task';
import {TasksComponent} from '../components/tasks/tasks.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

selectedTask : Task ;
tasks : Task [] ;
readonly URL_API = 'http://localhost:3000/api/tasks' ;

  constructor( private http : HttpClient ) {
  this.selectedTask = new Task () ;
   }
  
 getTasks () {
 return this.http.get(this.URL_API);
 }
  
  postTask( Task:Task ) {
  return this.http.post(this.URL_API, Task);
  }
  
  
  deleteTask(_id : string ){
  return this.http.delete(this.URL_API +`/${_id}` );
  }
  
}
