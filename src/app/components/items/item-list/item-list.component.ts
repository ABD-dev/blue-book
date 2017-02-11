import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { AppSettings } from '../../../app.config';
import { ConfirmModalComponent } from '../../confirm-modal/confirm-modal.component' ;
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items: Array<any>;
  @ViewChild(ConfirmModalComponent) modal;

  constructor(private authHttp: AuthHttp, private appSettings: AppSettings) { }

  ngOnInit() {
    this.authHttp.get(`${this.appSettings.API_URL}/items`)
      .map(response => response.json())
      .subscribe(
        data => this.items = data,
        error => console.log(error)
      );
  }

  openModal(itemIndex) {
    this.modal.confirmValue = itemIndex;
    this.modal.open();
  }

  removeItem(event) {
    let itemId = this.items[event].id;
    this.authHttp.delete(`${this.appSettings.API_URL}/items/${itemId}`)
      .subscribe(
        data => this.items.splice(event, 1),
        error => console.log(error)
      );
  }

}
