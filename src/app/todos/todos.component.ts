import { Component, OnInit } from '@angular/core';
// import { Todo } from './../models/todos';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})


export class TodosComponent implements OnInit{
  todos: any[] = [];
  newTodoText: string = '';
  finishedTodos: string[] = [];

  onclick(){
    console.log("Add todo clicked");
  }

   constructor(private todoservice: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoservice.getTodos();
  }

  addTodo(): void {
    if (this.newTodoText.trim() !== '') {
      this.todos.push(this.newTodoText);
      this.newTodoText = '';
  }
}

moveToFinished(index: number): void {
    const todo = this.todos[index];
    this.todos.splice(index, 1);
    this.finishedTodos.push(todo);
  }

  moveBackToTodo(index: number): void {
    const finishedTodo = this.finishedTodos[index];
    this.finishedTodos.splice(index, 1);
    this.todos.push(finishedTodo);
  }

  deleteFinished(index: number): void {
    this.finishedTodos.splice(index, 1);
  }
}
