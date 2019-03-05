import { Component, OnInit } from '@angular/core';


import { TaskService } from '../../services/task.service';
import { NgForm } from '@angular/forms' ;
import { Task } from '../../models/task';

declare var M : any;

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less'],
  providers : [TaskService]
})
export class TasksComponent implements OnInit {

  constructor(private taskService : TaskService) { }

  ngOnInit() {
  
    this.getTasks();
  }
  
  addTask (form : NgForm) {
 this.taskService.postTask(form.value)
  .subscribe(res => {
  this.resetForm(form);
  M.toast({html: 'Tarea guardada!'});
  this.getTasks();
  } );
 }
  
  getTasks(){
  this.taskService.getTasks()
  .subscribe (res => {
  this.taskService.tasks= res as Task[];
  console.log(res);
  });
  }
  
  
  deleteTask(_id : string){
  if(confirm ('Esta seguro/a de eliminar')){
   this.taskService.deleteTask(_id)
   .subscribe (res =>{
  this.getTasks();
  M.toast({html: 'Tarea eliminada!'});
  });
  }
  }
  
  
  resetForm( form? : NgForm){
  if (form){
  form.reset ();
  this.taskService.selectedTask = new Task ();
  }
  };
  
}
