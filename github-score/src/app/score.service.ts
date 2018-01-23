import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
//import { userInfo } from 'os';

@Injectable()
export class ScoreService {
  userData: BehaviorSubject<any> = new BehaviorSubject([]);
  constructor( private _http: HttpClient) {
    this.retriveData;
   }

  retriveData(username: string): any{
    return this._http.get('https://api.github.com/users/'+username)
        .subscribe(
          (data: any) => {
            console.log(data, 'data from api call')
            this.userData.next(data)
          },
          (err) => {
            this.userData.next({error: 'not found'})
          })
  }

}
