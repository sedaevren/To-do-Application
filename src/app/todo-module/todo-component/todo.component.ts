import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from './../todo-service';
import { Todo } from './../todo-model';
import { NgDateRangePickerOptions } from 'ng-daterangepicker';



export class DemoTimepickerBasicComponent {
  public mytime: Date = new Date();
}
@Component({
  selector: 'todo-comp',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css'],
  providers: [TodoService]
})

export class TodoComponent implements OnInit {
  newTodo: Todo = new Todo();
  selection = 'ALL';
  public mytime: Date = new Date();

  constructor(private todoService: TodoService) {
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  getS() {
    return 2;
  }


  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    //this.todoService.toggleTodoCancel(todo);
    this.todoService.deleteTodoById(todo.id, todo);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

  get openTodos() {
    return this.todoService.getAllTodos().filter(t => t.complete === false && t.cancel === false);
  }

  get completedTodos() {
    return this.todoService.getAllTodos().filter(t => t.complete === true && t.cancel === false);
  }

  //
  get cancelledTodos() {
    return this.todoService.getAllTodos().filter(t => t.cancel === true);
  }
  //
  // Simulate GET /todos/:id
  
  getTodoById(id: number) {//
    this.todoService.getTodoById(id);
  }

  changeSelection(_selection) { //for debug

    this.selection = _selection;
    console.log('selection changed: ' + _selection);
  }

  ngOnInit() {
  }
}