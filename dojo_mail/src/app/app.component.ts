import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails:{email: string, importance: boolean, subject: string, content: string}[]= [
    {'email': "Bill@gates.com", 'importance': true, 'subject': "New Windowns", 'content': 'Windows XI will launch in year 2100'},
    {'email': "ada@lovelace.com", 'importance': true, 'subject': "programming", 'content': 'Enchantress of Numbers'},
    {'email': "john@carmac.com", 'importance': false, 'subject': "update Algo", 'content': 'New algorithm for shadow volumes'},
    {'email': "gabe@newel.com", 'importance': false, 'subject': "HL3!", 'content': 'Just kidding..'},


  ];


}
