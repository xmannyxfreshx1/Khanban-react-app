import React from 'react';

/*import uuid from 'uuid';

const notes = [
    
    {
        //id: '4e81fc6e-bfb6-419b-93e5-0242fb6f3f6a',
        id: uuid.v4(),
        task: 'Learn React'
        
    },
    
    
    {
        //id: '11bbffc8-5891-4b45-b9ea-5c99aadf870f',
        id: uuid.v4(),
        task: 'Go to code the dream'
    },
    
    
    ]; */
    
export default ({notes}) => (
    <ul>{notes.map(note=>
        <li key={note.id}>{note.task}</li>
    )}
    </ul>
    )