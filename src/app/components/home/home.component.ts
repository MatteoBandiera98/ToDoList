import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../service/todo.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [];
  searchTerm: string = '';

  constructor(private todoService: TodoService, private userService: UserService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  toggleTodoCompletion(todoId: number): void {
    this.todoService.toggleTodoCompletion(todoId);
  }

  getUserById(userId: number) {
    return this.userService.getUserById(userId);
  }

  get filteredTodos(): Todo[] {
    return this.todos.filter(todo => {
      const user = this.getUserById(todo.userId);
      return user && user.firstName.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }
}
