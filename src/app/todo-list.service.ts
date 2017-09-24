import { Injectable } from '@angular/core';
import { TodoListStorageService } from './todo-list-storage.service';

@Injectable()
export class TodoListService {

  private todoList = [

  ];

  constructor(private storage:TodoListStorageService) {

  }

  addItem(item) {
    return this.storage.post(item);
  }
  getTodoList() {
     return this.storage.get();
  }

  removeItem(item) {
    return this.storage.destroy(item);
  }

}