import { not } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { notes } from '../dataBase/notes'

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {

  constructor() { }

  notes = notes;

  ngOnInit(): void {
    
  }

  downArr(note : any) {
    let index = notes.indexOf(note);
    notes.splice(index,2,notes[index + 1],notes[index])
  }
  upArr(note : any) {
    let index = notes.indexOf(note);
    notes.splice(index - 1,2,notes[index],notes[index - 1])
  }

  addNoteDoubleNotes(note : any, text : string) {
    let index = notes.indexOf(note);
    if (text) {
      notes[index].noteArr.push(text)
    }
  }

  deleteArr(arr : any, index : number) {
    arr.splice(index,1)
  }

  createNote(text : any) {
    notes.push({
      text,
      noteArr: ['']
    })
  }

}
