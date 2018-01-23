import { Component, OnInit } from '@angular/core';
import {PowerBoxComponent} from './power-box/power-box.component'
@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  masterpower: 0;
  calculatePowers(pow){
    this.masterpower = pow
  }
  constructor() { }

  ngOnInit() {
  }

}
