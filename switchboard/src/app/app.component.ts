import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboad';

  buttons = [
    {label: 'off', className: 'notActive'},
    {label: 'off', className: 'notActive'},
    {label: 'off', className: 'notActive'},
    {label: 'off', className: 'notActive'},
    {label: 'off', className: 'notActive'},
    {label: 'off', className: 'notActive'},
    {label: 'off', className: 'notActive'},
    {label: 'off', className: 'notActive'},
    {label: 'off', className: 'notActive'},
    {label: 'off', className: 'notActive'}
  ]

  toggle(id){
    if (this.buttons[id].label === 'off'){
      this.buttons[id].label = 'on'
      this.buttons[id].className = 'active'
    }else{
      this.buttons[id].label = 'off'
      this.buttons[id].className = 'notActive'
    }
  }
}

