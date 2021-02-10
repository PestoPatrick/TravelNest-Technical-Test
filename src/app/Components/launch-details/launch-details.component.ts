import {Component, OnInit} from '@angular/core';
import {SpacexApiService} from '../../spacex-api.service';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss']
})
export class LaunchDetailsComponent implements OnInit {

  constructor(private spacexAPIService: SpacexApiService) {
  }

  // holds the ships that were involved with the launch
  launchShipIDs = [];
  // holds individual ship details in an array
  shipDetails = [];
  // holds the launch details object
  launchDetails: any;

    /* The function below retrieves the information from the get request that was made through the spacexAPI service. It
    sets an observable to listen for changes but as it is a single get request i believe the observable will be resolved
    once the request is returned and launchDetails will go from being an observable to the JSON response data */
    async GetLaunchDetails(): Promise<void> {
      this.launchDetails = await this.spacexAPIService.GetLaunchDetails();
      console.log(this.launchDetails);
    }



  // This function extracts the ship IDs from the launch and pushes them into a list
  ExtractShipIDs(): void {
    console.log(this.launchDetails.name);
    for (const i of this.launchDetails.ships) {
      this.launchShipIDs.push([i]);
      console.log(i);
    }
  }
  // this sends a get request for each ship by using their IDs and then puts each result into an array
  async GetShipDetails(): Promise<any>{
      let shipInfo;
      for (const i of this.launchShipIDs) {
        shipInfo = await this.spacexAPIService.GetShipInformation([i]);
        this.shipDetails.push(shipInfo);
        console.log(shipInfo);
      }
      console.log(this.shipDetails);
  }

  // this is for running the programs in a asynchronous function
  async AsyncRun(): Promise<void> {
      await this.GetLaunchDetails();
      this.ExtractShipIDs();
      await this.GetShipDetails();
  }

  ngOnInit(): void {
    this.AsyncRun();

  }

}
