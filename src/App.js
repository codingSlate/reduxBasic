import React from 'react';
import './style.css';
import {store} from './redux'

function App() {
  return <div store={store}>check console</div>;
}
export default App;
