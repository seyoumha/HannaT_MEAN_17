import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service'


@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  weatherStats = {}
  status = ''
  title = 'Washington DC'

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService.weatherInfo('arlington');
    this._weatherService.weatherData.subscribe((data)=>{
      if(data.main){
        this.weatherStats = data.main
        this.status = data.weather[0].description
      }
    })
  }

}
