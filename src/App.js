import React from 'react';
import './App.css';
import {Typography} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import Home from "./Home"
function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img alt="" src="ieeesbw.png" width="20%" height="20%"/>
        <h1>Dear ENIT people</h1>
        <img alt="" src="enit.png" width="10%" height="10%"/>
      </header>
      <div className="slogan">
        <h3>Always Great Because we built it together</h3>
      </div>

      <Home/>
      <div className="footer">
          <Typography variant="body1" component="h2">
            Created by <CodeIcon font="small"/>
            <a className="link" href="https://www.linkedin.com/in/malek-ammar-924551148/" target="_blank" rel="noopener noreferrer"> Malek Ammar</a>
          </Typography>
        </div>
    </div>
  );
}

export default App;
