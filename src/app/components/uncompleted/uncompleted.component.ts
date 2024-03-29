import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-uncompleted',
  templateUrl: './uncompleted.component.html',
})
export class UncompletedComponent implements OnInit {
  uncompletedTodos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getUncompletedTodos();
  }

  getUncompletedTodos() {
    this.uncompletedTodos = this.todoService.getUncompletedTodos();
  }
}

