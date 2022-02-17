import React from 'react';
import './style.css';

function App(props) {
  console.log('From App component ', props.store.getState());
  return <div>Hello</div>;
}
export default App;
