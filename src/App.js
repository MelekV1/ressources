import React from 'react';
import './App.css';
import {Typography} from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import Home from "./Home";
import ParticlesBg from 'particles-bg'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img alt="IEEE ENIT SB" src="ieeesbw.png" width="200" height="200"/>
        <h3>Dear ENIT People</h3>
        <img alt="ENIT" src="enit.png" width="100" height="100"/>
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
      <ParticlesBg type="circle" bg={true} />
    </div>
  );
}

export default App;
