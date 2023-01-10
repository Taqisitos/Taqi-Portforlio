import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

// Ext Components
import ColorSchemesExample from "./components/Navbar.js";

// Int Components
import Intro from './components/Intro';
import Work from './components/Work';
import Resume from './components/Resume';

function Home() {
  return (
    <>
        <ColorSchemesExample/>
        <Intro/>
        <Work/>
        <Resume/>
    </>
  );
}

export default Home;