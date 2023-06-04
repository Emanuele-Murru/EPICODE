import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  toDoList: Todo[] = [];

  newTask: string = '';

  loading:boolean = true;

  constructor(private TodoService: TodoService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false,
      this.toDoList = this.TodoService.getToDoList();
    }, 2000);
  }

  createTask(inputNewTask: string): void {
    setTimeout(() => {
      this.TodoService.addTask(inputNewTask);
      this.newTask = '';
      console.log(this.toDoList);
    }, 2000);
  }

  eliminateTask(task: Todo) {
    setTimeout(() => {
      this.TodoService.deleteTask(task);
    }, 2000);
  }

  checkCompletedTasks(): boolean {
    return this.toDoList.every((task) => task.completed === true);
  }

  resetList() {
    this.TodoService.clearList();
    setTimeout(() => {
      this.toDoList = this.TodoService.getToDoList();
    }, 2000);
  }

  completedTask(task: Todo): void {
    setTimeout(() => {
      this.TodoService.completedTask(task);
    }, 2000);
  }
}
