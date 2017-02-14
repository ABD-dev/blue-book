import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styles: []
})
export class BasketComponent {
  @Input() items: Array<any>;
  @Output() deleteItem = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() sub = new EventEmitter();

  constructor() { }

  removeItem(index) {
    this.deleteItem.emit(index);
  }

  addOne(i) {
    this.add.emit(i);
  }

  subOne(i) {
    this.sub.emit(i);
  }

}
