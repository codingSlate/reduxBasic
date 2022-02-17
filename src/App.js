import React from 'react';
import './style.css';

function App(props) {
  console.log("From App component ", props.store.getState().user);
  return <div>Hello</div>;
}
export default App;
