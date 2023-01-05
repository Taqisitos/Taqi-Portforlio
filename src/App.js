import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// Ext Components
import ColorSchemesExample from "./components/Navbar.js";

// Int Components
import Intro from './components/Intro';
import Work from './components/Work';

function App() {
  return (
    <>
        <ColorSchemesExample/>
        <Intro/>
        <Work/>
    </>
  );
}

export default App;