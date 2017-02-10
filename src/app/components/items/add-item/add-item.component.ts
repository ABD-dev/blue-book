import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { AppSettings } from '../../../app.config';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
})
export class AddItemComponent {
  public addItemForm = this.fb.group({
    'name': ['', Validators.required],
    'description': [''],
    'amount_in': ['', Validators.required],
    'value_in': [''],
    'value_out': [''],
  });
  items: Object[] = [];

  constructor(public fb: FormBuilder,private authHttp: AuthHttp,private appSettings: AppSettings) {
  }

  doSubmit(values) {
    this.authHttp.post(`${this.appSettings.API_URL}/items`, this.addItemForm.value)
      .map(res => res.json())
      .subscribe(
        data => { 
          this.items.push(data.item);
          this.addItemForm.reset();
          },
        error => console.log(error)
      );
  }

}
