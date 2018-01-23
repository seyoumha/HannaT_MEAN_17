import { Component, OnInit, Input } from '@angular/core';
import { EINPROGRESS } from 'constants';

@Component({
  selector: 'app-power-box',
  templateUrl: './power-box.component.html',
  styleUrls: ['./power-box.component.css']
})
export class PowerBoxComponent implements OnInit {

  constructor() { }
  @Input() power:number;
  @Input() multiplier:number;
  @Input() title:string;



  ngOnInit() {
  }

}
