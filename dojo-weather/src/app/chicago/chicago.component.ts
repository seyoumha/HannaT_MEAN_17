import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service'


@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weatherStats = {}
  status = ''
  title = 'Chicago'

  constructor(private _weatherService: WeatherService) { }


  ngOnInit() {
    this._weatherService.weatherInfo('chicago');
    this._weatherService.weatherData.subscribe((data)=>{
      if(data.main){
        this.weatherStats = data.main
        this.status = data.weather[0].description
      }
    })
  }

}
