import React from 'react';
import logo from './logo.svg';
import {result} from 'foo/lol.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          1 + 1 = {result}.
        </p>
      </header>
    </div>
  );
}

export default App;
