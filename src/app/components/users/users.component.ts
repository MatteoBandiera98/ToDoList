import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any[] = []; //dichiaro any in quanto se scrivo User si crea un malfunzionamento dell'applicazione
  todos: Todo[] = [];

  constructor(
    private userService: UserService,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.getUsersWithTodos();
  }

  getUsersWithTodos(): void {
    this.userService
      .getUsersWithTodos()
      .then((data: any) => {
        this.users = data;
        // Dopo aver ottenuto gli utenti, otteniamo anche le attività
        this.todos = data.reduce((acc: Todo[], user: any) => {
          return acc.concat(user.todos);
        }, []);
      })
      .catch((error: any) => {
        console.error(
          'An error occurred while fetching users with todos:',
          error
        );
      });
  }

  getTodosByUserId(userId: number): Todo[] {
    return this.todos.filter(todo => todo.userId === userId);
  }
}

