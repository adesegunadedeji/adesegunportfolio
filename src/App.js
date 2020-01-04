import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/Navbar/Navbar';
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Home/>
    </div>
  );
}

export default App;
