import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';


if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

//const HelloWorld= React.createClass({
 // stutter = 3
  
  //render:function(){
    
    
//  }
  
  
  
 // });

ReactDOM.render(
  //<div>Hello world we in this peiece! we in here!!</div>,
  < App />,
  document.getElementById('app')
);
