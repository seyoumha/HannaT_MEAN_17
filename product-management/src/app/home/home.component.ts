import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home Page'
  intro = "Welcome to the Project Product Management. here we can manage a set of products.  You are able to create new products, remove old products, and edit products."
  constructor() { }

  ngOnInit() {
  }

}
