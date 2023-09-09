
import * as React from 'react';
import {Navbar} from './Components/Navbar.js';
import {CharacterGrid} from './Components/CharacterGrid.js';
import {EnvironmentGrid} from './Components/EnvironmentGrid.js';
import {Spellsonder} from './Components/Spellsonder.js';
import {About} from './Components/About.js';
import {Homepage} from './Components/Homepage.js';
import './App.css';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <a  href="/" className="logo" >
        <img className="logo-img" src={require('./Images/AUSTIN RAYE LOGO.png')}/>
      </a>
      <Navbar />
      <Routes>
        <Route path="/character-design" element={<CharacterGrid />} />  
        {/*<Route path="/environment-design" element={<EnvironmentGrid />} />
        <Route path="/spellsonder" element={<Spellsonder />}/>*/}
  <Route path="/about" element={<About/>} />
        <Route exact path="/" element={<CharacterGrid/>} />
      </Routes>
    </div>
  )
}

export default App;
