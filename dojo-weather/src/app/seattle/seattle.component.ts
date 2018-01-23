import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service'

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weatherStats = {}
  status = ''
  title = 'Seattle'

  constructor(private _weatherService: WeatherService) { }


  ngOnInit() {
    this._weatherService.weatherInfo('seattle');
    this._weatherService.weatherData.subscribe((data)=>{
      if(data.main){
        this.weatherStats = data.main
        this.status = data.weather[0].description
      }
    })
  }

}
