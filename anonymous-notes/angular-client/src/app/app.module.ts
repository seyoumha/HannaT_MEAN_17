import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NotesService} from './notes.service'


import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { NotesComponent } from './notes/notes.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
