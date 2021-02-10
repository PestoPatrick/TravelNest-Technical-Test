import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {



  @Input() shipDetails;



  constructor() { }

  ngOnInit(): void {
  }

}
