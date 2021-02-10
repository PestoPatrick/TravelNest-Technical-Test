import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {

  baseUrl = 'https://api.spacexdata.com/v4/';

  constructor(private http: HttpClient) { }

  async GetLaunchDetails(): Promise<any> {
    return await this.http.get(`${this.baseUrl}launches/latest`).toPromise();
  }

  async GetShipInformation(id): Promise<any> {
    return await this.http.get(`${this.baseUrl}ships/${id}`).toPromise();
  }
}
