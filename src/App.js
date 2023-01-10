import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Int Components
import Home from './Home.js';

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="#work" element={<Home />}/>
            <Route path="/resume" element={<Home />}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;