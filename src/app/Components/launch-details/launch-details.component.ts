import {Component, Input, OnInit} from '@angular/core';
import {SpacexApiService} from '../../spacex-api.service';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss']
})
export class LaunchDetailsComponent implements OnInit {

  @Input() ships: Array<string>;
  launchDetails: any;

  GetlaunchDetails(): any {
    this.spacexAPIService.GetLaunchDetails().subscribe(launchDetails => this.launchDetails = launchDetails);
  }

  ExtractShipIDs() {

  }

  constructor(private spacexAPIService: SpacexApiService) {
  }

  ngOnInit(): void {
    this.GetlaunchDetails();
  }

}
