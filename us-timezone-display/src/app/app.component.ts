import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  time = new Date();
  lastTimeZoneSelected = null;

  onButtonClick(timezone){
    this.time = new Date();
    if(timezone === 'mst'){
      this.time.setHours(this.time.getHours() +1);
    }else if(timezone === 'cst'){
      this.time.setHours(this.time.getHours() +2);
    } else if(timezone === 'est'){
      this.time.setHours(this.time.getHours() +2);
    }
    this.lastTimeZoneSelected = timezone;
  }
}
