import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private toDoList: Todo[] = [];

  getToDoList(): Todo[] {
    return this.toDoList;
  }

  addTask(title: string): void {
    this.toDoList.push({
      id: this.toDoList.length + 1,
      title,
      completed: false,
    });
  }

  deleteTask(task: Todo) {
    let indice = this.toDoList.findIndex((i) => i.id === task.id);
    if (indice !== -1) {
      this.toDoList.splice(indice, 1);
    }
  }

  clearList(): void {
    this.toDoList = [];
  }

  deleteCompleted(): void {
    this.toDoList = this.toDoList.filter((task) => !task.completed);
  }

  completedTask(task: Todo):void {
    task.completed = !task.completed;
  }

}
