import { Component, OnInit, Input, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title = 'Quotes List'
  @Input() allQuotes:Array<any>;
  @Output()
  voteClick: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  removeQuote: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }
  vote(rating, num, index){
    if(num === 1){
      rating += num;
      this.voteClick.emit([rating, index]);
    }
    else if(num === -1){
      rating += num;
      this.voteClick.emit([rating, index]);
    }
  }
  destroy(idx){
    console.log('delete', idx)
    this.removeQuote.emit(idx);
  }

}
