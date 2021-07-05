import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav />
      <Home />
    </div>
  );
}

export default App;
