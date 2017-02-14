import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styles: []
})
export class TotalComponent {
  @Input() items: Array<any>;
  public sum: number;

  constructor() { }

  update() :void{
    this.sum = 0;
    this.items.forEach(item => {
      this.sum += (item.pcs || 1) * item.value_out;
    });
  }

}
