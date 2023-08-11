import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  addTodo(newTodo: { text: string; completed: boolean; }) {
    throw new Error('Method not implemented.');
  }
  getTodos(): any[] {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
