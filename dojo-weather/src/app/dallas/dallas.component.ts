import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service'


@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weatherStats = {}
  status = ''
  title = 'Dallas'

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService.weatherInfo('dallas');
    this._weatherService.weatherData.subscribe((data)=>{
      if(data.main){
        this.weatherStats = data.main
        this.status = data.weather[0].description
      }
    })
  }

}
