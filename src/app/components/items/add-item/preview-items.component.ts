import { Component, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-preview-items',
  templateUrl: './preview-items.component.html',
})
export class PreviewItemsComponent implements OnDestroy {
  @Input() items: Object[];
  public interval;
  public timer;

  constructor() { 
    this.interval = Observable.interval(10000);
    this.timer = this.interval.subscribe(() => this.items.length > 3 && this.removeItem(0));
  }

  ngOnDestroy() {
    this.timer.unsubscribe();
  }

  removeItem(index) {
    this.items.length && this.items.splice(index,1);
  }

}
