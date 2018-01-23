import { Component } from '@angular/core';
import{QuoteComponent} from './quote/quote.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Add a Quote';
  quotes = [
    {quote: 'second', author: 'me', rating: 1},
    {quote: 'third', author: 'me', rating: -5},
    {quote: 'first', author: 'me', rating: 10},

  ]
  sortedQuotes(){
    const sortedQuotes = this.quotes.sort((a,b) => ( a.rating - b.rating))
    return sortedQuotes.reverse();
  }
  q = {quote: '', author: '', rating: 0}

  addQuote(){
    this.quotes.push(this.q)
    this.q = {quote: '', author: '', rating: 0}
  }
  changeRating(arg){
    const rating = arg[0]
    const index = arg[1]
    this.quotes[index].rating = rating;
  }
  destroy(idx){
    const deletedQuote = this.quotes.splice(idx, 1)
    console.log('all quote',this.quotes)
    console.log('deletedQuote', deletedQuote)
  }
}
