import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  completedList: Todo[] = [];

  newTask: string = '';

  loading:boolean = true;

  constructor(private TodoService: TodoService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
      this.completedList = this.TodoService.getToDoList();
    }, 2000);
  }

  eliminateTask(task: Todo) {
    setTimeout(() => {
      this.TodoService.deleteTask(task);
    }, 2000);
  }

  resetList() {
    this.TodoService.clearList();
    setTimeout(() => {
      this.completedList = this.TodoService.getToDoList();
    }, 2000);
  }
}
