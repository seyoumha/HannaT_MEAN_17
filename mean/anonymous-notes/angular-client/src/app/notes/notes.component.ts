import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../notes.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[]= []

  constructor(private _notesService: NotesService) { }

  ngOnInit() {
    this._notesService.retriveNotes()
    this._notesService.notesObserver.subscribe(notes => this.notes = notes)
  }

}
