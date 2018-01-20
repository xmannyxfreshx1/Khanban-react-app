import uuid from 'uuid';
import NoteActions from '../actions/NoteActions';

export default class NoteStore {
  constructor() {
    this.bindActions(NoteActions);
    this.notes = [
      {
        id: uuid.v4(),
        task: 'Learn React'
      },
      {
        id: uuid.v4(),
        task: 'Do laundry'
      }
    ];
  }
  
  create(note){
    console.log('create note', note);
  }
  update(updatedNote){
    console.log('update Note', updatedNote);
  }
  delete(id){
    console.log('delete note', id);
  }
  
}