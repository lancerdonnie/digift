import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
