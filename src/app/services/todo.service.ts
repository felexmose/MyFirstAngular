import { Todo } from './../models/Todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  header: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  // get todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
    }

    // toggle completed
    toggleCompleted(todo: Todo): Observable<any> {
      const url = `${this.todosUrl}/${todo.id}`;
      return this.http.put(url, todo); // add third parameter httpOptions constant
    }

 /* getTodos() {
    return [
      {id: 1, title: 'star1', completed: false},
      {id: 2, title: 'star2', completed: true},
      {id: 3, title: 'star3', completed: false}
    ];
  } */
}
