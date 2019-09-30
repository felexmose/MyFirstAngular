import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private TS: TodoService) { }

  ngOnInit() {
    this.TS.getTodos().subscribe(todos => {
      this.todos = todos;
    });
   /* this.todos = [
      {id: 1, title: 'star1', completed: true},
      {id: 2, title: 'star2', completed: true},
      {id: 3, title: 'star3', completed: false}
    ]; */
  }

}
