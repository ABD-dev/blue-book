import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
})
export class AddItemComponent {
  public addItemForm = this.fb.group({
    barcode: ['', Validators.required],
    name: ['', Validators.required],
    description: [''],
    amount: ['', Validators.required],
  });
  items: Object[] = [];

  constructor(public fb: FormBuilder) {
   }

  doSubmit(values) {
    this.items.push(this.addItemForm.value);
    this.addItemForm.reset();
  }

}
