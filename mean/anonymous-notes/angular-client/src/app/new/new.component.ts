import { Note } from './../note';
import { Component, OnInit } from '@angular/core';
import { NotesService } from './../notes.service';



@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newNote: Note = new Note();

  constructor(private _notesService: NotesService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log('button clicked')
    this._notesService.createNote(this.newNote);
    this.newNote = new Note();
  }


}
