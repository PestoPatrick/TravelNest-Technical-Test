import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {urlJoin} from '@angular-devkit/build-angular/src/utils';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {

  baseUrl = 'https://api.spacexdata.com/v4/'

  constructor(private http: HttpClient) { }

  GetLaunchDetails() {
    return this.http.get(`${this.baseUrl}'launches/latest'`);
  }

  GetShipInformation(id: string) {
    return this.http.get(`${this.baseUrl}/ships/${id}`);
  }
}
