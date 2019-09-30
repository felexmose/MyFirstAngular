import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
    }

 /* getTodos() {
    return [
      {id: 1, title: 'star1', completed: false},
      {id: 2, title: 'star2', completed: true},
      {id: 3, title: 'star3', completed: false}
    ];
  } */
}
