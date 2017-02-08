import {Injectable} from '@angular/core';

@Injectable()
export class AppSettings {
    API_URL: String;

    constructor() {
        this.API_URL = 'http://laravel.local/api';
    }

}