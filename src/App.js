import React from 'react';
import iconXZ from './img/icon_xz.png'
import reactLogo from './img/react_logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={iconXZ} className="App-icon" alt="logo" />
      </header>
      <footer className="App-footer">
        Powered By
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
            <img src={reactLogo} className="App-react-logo" alt="logo" />
          </a>
      </footer>
    </div>
  );
}

export default App;
