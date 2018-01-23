import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WeatherService {
weatherData: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private _http: HttpClient) {}

   weatherInfo(city: string): any{
     return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&id=524901&APPID=7a5c5212ba22c67dc4184864d57ae2e7&units=imperial')
     .subscribe(
       (data: any) =>{
        this.weatherData.next(data)
       }

     )
   }

}
