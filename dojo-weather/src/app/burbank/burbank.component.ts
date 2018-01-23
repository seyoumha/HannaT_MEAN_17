import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service'

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weatherStats = {}
  status = ''
  title = 'Burbank'

  constructor(private _weatherService: WeatherService) { }



  ngOnInit() {
    this._weatherService.weatherInfo('burbank');
    this._weatherService.weatherData.subscribe((data)=>{
      if(data.main){
        this.weatherStats = data.main
        this.status = data.weather[0].description
      }
    })


  }

}
