import { Component, OnInit } from '@angular/core';
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { AppSettings } from '../../../app.config';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items: Array<any>;

  constructor(private authHttp: AuthHttp, private appSettings: AppSettings) { }

  ngOnInit() {
    this.authHttp.get(`${this.appSettings.API_URL}/items`)
      .map(response => response.json())
      .subscribe(
        data => this.items = data,
        error => console.log(error)
      );
  }

  removeItem(index) {
    // Todo: confirm delete
    let itemId = this.items[index].id;
    this.authHttp.delete(`${this.appSettings.API_URL}/items/${itemId}`)
      .subscribe(
        data => this.items.splice(index, 1),
        error => console.log(error)
      );
  }

}
