import React from 'react';
import ReactDOM from 'react-dom';

function HI()
{
  return <div>Hello World!</div>
}

ReactDOM.render(<HI/>, document.querySelector('#root'));