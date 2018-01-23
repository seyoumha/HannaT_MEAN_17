import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service'

@Component({
  selector: 'app-vienna',
  templateUrl: './vienna.component.html',
  styleUrls: ['./vienna.component.css']
})
export class ViennaComponent implements OnInit {
  weatherStats = {}
  status = ''
  title = 'Vienna, VA'

  constructor(private _weatherService: WeatherService) { }


  ngOnInit() {
    this._weatherService.weatherInfo('vienna');
    this._weatherService.weatherData.subscribe((data)=>{
      if(data.main){
        this.weatherStats = data.main
        this.status = data.weather[0].description
      }
    })

  }

}
