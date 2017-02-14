import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { AppSettings } from '../../app.config';
import { TotalComponent } from './total.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  public scanForm = this.fb.group({
    'barcode': new FormControl('', [ Validators.required ]),
  });
  public itemList = [];
  public barcodeSelected = true;
  public nameSelected = false;
  public itemsNameList = [];
  @ViewChild(TotalComponent) totalComponent: TotalComponent; 

  constructor(private fb: FormBuilder, private authHttp: AuthHttp, private appSettings: AppSettings) { }

  ngOnInit() {
    this.authHttp.get(`${this.appSettings.API_URL}/items`, new RequestOptions({
        search: new URLSearchParams('only=name')
    }))
      .map(response => {
        return response.json().map(function(i){ return i.name });
      })
      .subscribe(
        data => this.itemsNameList = data,
        error => console.log(error)
      );

    this.scanForm.get('barcode').valueChanges
      .debounceTime(1000)
      .subscribe(newValue => this.scanFormSubmit() );
  }

  makeRequest(options?) {
    this.authHttp.get(`${this.appSettings.API_URL}/items`, options)
      .map(response => response.json())
      .subscribe(
        data => { 
          if ( data.length ){
            this.itemList.push(data[0]);
            this.totalComponent.update();
          } else {
            console.log('Item not found!');
          }
          this.scanForm.reset();
        },
        error => console.log(error)
      );
  }

  scanFormSubmit() {
    if ( !this.scanForm.valid ) {
      return;
    }
    let params: URLSearchParams = new URLSearchParams();
    params.set('barcode', this.scanForm.value.barcode);
    let options: RequestOptions = new RequestOptions({
        search: params
    });

    this.makeRequest(options);
  }

  toggleBarcodeName() {
    this.barcodeSelected = !this.barcodeSelected;
    this.nameSelected = !this.nameSelected;
  }

  removeItem(i) {
    this.itemList.splice(i, 1);
    this.totalComponent.update();
  }

  addPcsToItem(i) :void {
    let currentPcs = this.itemList[i].pcs || 1;
    if ( ( this.itemList[i].amount_in - this.itemList[i].amount_out - currentPcs ) != 0 ) {
      this.itemList[i].pcs = currentPcs + 1;
      this.totalComponent.update();
    }
  }

  subPcsToItem(i) :void{
    let currentPcs = this.itemList[i].pcs || 1;
    if ( this.itemList[i].pcs != 1 ) {
      this.itemList[i].pcs = currentPcs - 1;
      this.totalComponent.update();
    }
  }

  selected(event) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('name', event.text);
    let options: RequestOptions = new RequestOptions({
        search: params
    });

    this.makeRequest(options);
  }

}
