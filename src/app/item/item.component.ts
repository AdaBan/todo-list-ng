import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
  	<span class="todo-item">
    	{{todoItem.title}}
    </span>
    <button class="btn-red" (click)="removeItem()">
      remove
    </button>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    console.log('...')
    this.remove.emit(this.todoItem);
  }

  @Input() todoItem: any;
  @Output() remove:EventEmitter<any> = new EventEmitter();
}
