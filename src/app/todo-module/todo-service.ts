import { Injectable } from '@angular/core';
import { Todo } from './todo-model';

@Injectable()
export class TodoService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  todos: Todo[] = [];
  cancelledTodos: Todo[] = [];

  constructor() {
  }


  addTodo(todo: Todo) {
    if (todo.title.trim() === '')
      return;
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos = this.todos.concat([todo]);
  }



  deleteTodoById(id: number, todo: Todo) {

    this.todos = this.todos
      .map(t => {
        if (t.id === todo.id) {
          t.cancel = !t.cancel;
        }
        return t;
      });

    return;
  }


  getAllTodos(): Todo[] {
    return this.todos;
  }


  toggleTodoComplete(todo: Todo) {
    this.todos = this.todos
      .map(t => {
        if (t.id === todo.id) {
          t.complete = !t.complete;

        }
        return t;
      });

    return;
  }

  //
  toggleTodoCancel(todo: Todo) {
    this.todos = this.todos
      .map(t => {
        if (t.id === todo.id) {
          t.cancel = !t.cancel;
        }
        return t;
      });

    return;
  }
  //

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  
  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }


  // // Simulate POST /todos
  // addTodo(todo: Todo): TodoService {
  //   if (!todo.id) {
  //     todo.id = ++this.lastId;
  //   }
  //   this.todos = this.todos.concat([todo]);
  //   return this;
  // }

  // // Simulate DELETE /todos/:id
  // deleteTodoById(id: number): TodoService {
  //   this.todos = this.todos
  //     .filter(todo => todo.id !== id);
  //   return this;
  // }



  // // Simulate GET /todos
  // getAllTodos(): Todo[] {
  //   return this.todos;
  // }

  // // Simulate GET /todos/:id
  // getTodoById(id: number): Todo {
  //   return this.todos
  //     .filter(todo => todo.id === id)
  //     .pop();
  // }

  // // Toggle todo complete
  // toggleTodoComplete(todo: Todo) {
  //   let updatedTodo = this.updateTodoById(todo.id, {
  //     complete: !todo.complete
  //   });
  //   return updatedTodo;
  // }

}