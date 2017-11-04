import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';
/*
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
    
    
    ];
*/
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  }
  render() {
    const {notes} = this.state;

    return (
      <div>
        <button onClick={() => console.log('add note')}>+</button>
        <Notes notes={notes} />
      </div>
    );
  }
}
/*
export default () => (
    <div>
        <button onClick={() => console.log('add note')}>+</button>
        
    
        <Notes notes={notes}/>
    </div>
    
    );*/