import { Component, OnInit } from '@angular/core';
import {ScoreService} from '../score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  title = 'Your Score:'
  userScore:number;
  msg={text:'',color:'black'} ;


  constructor(private _scoreService: ScoreService ) { }
  getData(name){
    this._scoreService.retriveData(name)
  }

  ngOnInit() {
    this._scoreService.userData.subscribe((data) => {
      if(data.error){
        this.msg.text = 'User does not exist, please find a different user name'
      }else{
        this.userScore = data.followers + data.public_repos
        this.updateMessage(this.userScore);
      }
    })
  }

  updateMessage(score):void{
    if(score < 20 ){
      this.msg.text =  "Needs Work!"
      this.msg.color =  "red"
    }else if( score < 50 && score > 21){
      this.msg.text =  "A decent start"
      this.msg.color =  "blue"
    }else if( score < 100 && score > 51){
      this.msg.text =  "Doing good!"
      this.msg.color =  "green"
    }else if( score < 200 && score > 51){
      this.msg.text =  "Great Job"
      this.msg.color =  "black"
    }else if ( score > 200){
      this.msg.text =  "Github Elite!"
      this.msg.color =  "yellow"
    }

  }

}
