import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'Rxjs';
import { Note } from './note';

@Injectable()
export class NotesService {
  notesObserver = new BehaviorSubject([]);

  constructor(private _http: Http) { }

  retriveNotes(){
    this._http.get('http://localhost:5000/notes').subscribe(
      notes =>this.notesObserver.next(notes.json()),
      errorResponse => console.log(errorResponse)
    )
  }

  createNote(note: Note){
    console.log("im here!")
    this._http.post('http://localhost:5000/notes', note).subscribe(
      //response => this.retriveNotes(),
      response => this.notesObserver.getValue().push(response.json()),
      errorResponse=> console.log(errorResponse)
    );
  }

}
