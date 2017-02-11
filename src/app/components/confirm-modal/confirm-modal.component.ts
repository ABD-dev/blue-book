import { Component, ViewChild, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
})
export class ConfirmModalComponent {
  public confirmValue:any = true;

  @ViewChild('modal') modal;
  @Output() public confirmed:EventEmitter<any> = new EventEmitter();

  constructor() { }

  open() :void {
    this.modal.show();
  }

  confirm() :void {
    this.modal.hide();
    this.confirmed.emit(this.confirmValue);
  }

}
