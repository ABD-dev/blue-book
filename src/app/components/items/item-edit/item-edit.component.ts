import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { AppSettings } from '../../../app.config';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  public editItemForm = this.fb.group({
    'name': ['', Validators.required],
    'description': [''],
    'amount_in': ['', Validators.required],
    'value_in': [''],
    'value_out': [''],
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private appSettings: AppSettings,
    private authHttp: AuthHttp) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];
    });
    this.authHttp.get(`${this.appSettings.API_URL}/items/${this.id}`)
      .map(res => res.json())
      .subscribe(
        data => this.editItemForm.patchValue(data.item),
        error => console.log(error)
      );
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  doSubmit() {
    this.authHttp.put(`${this.appSettings.API_URL}/items/${this.id}`, this.editItemForm.value)
      .map(res => res.json())
      .subscribe(
        data => this.editItemForm.patchValue(data.item),
        error => console.log(error)
      );
  }

}
