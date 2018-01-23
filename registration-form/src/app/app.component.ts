import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    st: '',
    apt: '',
    city: '',
    state: '',
    lucky: ''
  };
  msg= true;

  submitted(){
    this.msg = false

  }
}
