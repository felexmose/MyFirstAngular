import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
      {id: 1, title: 'star1', completed: false},
      {id: 2, title: 'star2', completed: true},
      {id: 3, title: 'star3', completed: false}
    ];
  }
}
