import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  
})
export class CompletedComponent implements OnInit {
  completedTodos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getCompletedTodos();
  }

  getCompletedTodos() {
    this.completedTodos = this.todoService.getCompletedTodos();
  }
}
