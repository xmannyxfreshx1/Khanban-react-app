import React from 'react';
import Note from './Note';

/*    
export default ({notes}) => (
    <ul>{notes.map(note=>
        <li key={note.id}><Note task = {note.task}/></li>
    )}
    </ul>
    )
*/    
export default ({notes, onDelete = () =>{}}) => (
    <ul>{notes.map(({id, task}) =>
        <li key={id}>
            <Note>
                <span>{task}</span>
                <button onClick={onDelete.bind(null,id)}>x</button>
            </Note>
          </li>
        )}</ul>
    )