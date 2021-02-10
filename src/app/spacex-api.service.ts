import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {

  baseUrl = 'https://api.spacexdata.com/v4/';

  constructor(private http: HttpClient) { }

  // retrieves the latest spacex launch details and returns it as a promise
  async GetLaunchDetails(): Promise<any> {
    return await this.http.get(`${this.baseUrl}launches/latest`).toPromise();
  }

  // retrieves the information on ships spacex owns based on their ID
  async GetShipInformation(id): Promise<any> {
    return await this.http.get(`${this.baseUrl}ships/${id}`).toPromise();
  }
}
