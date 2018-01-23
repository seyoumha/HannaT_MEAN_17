import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service'

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weatherStats = {}
  status = ''
  title = 'San Jose'

  constructor(private _weatherService: WeatherService) { }



  ngOnInit() {
    this._weatherService.weatherInfo('san jose');
    this._weatherService.weatherData.subscribe((data)=>{
      if(data.main){
        this.weatherStats = data.main
        this.status = data.weather[0].description
      }
    })
  }

}
