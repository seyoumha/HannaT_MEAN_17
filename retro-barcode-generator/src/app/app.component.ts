import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  color:Array<string>=[
    'green', 'yellow', 'red', 'blue', 'black', 'orange', 'gray'
  ]
  rand=(Math.floor(Math.random()*6))+1;
  rand2=(Math.floor(Math.random()*6))+1;
  rand3=(Math.floor(Math.random()*6))+1;
  rand4=(Math.floor(Math.random()*6))+1;
  rand5=(Math.floor(Math.random()*6))+1;
  rand6=(Math.floor(Math.random()*6))+1;
  rand7=(Math.floor(Math.random()*6))+1;
}
