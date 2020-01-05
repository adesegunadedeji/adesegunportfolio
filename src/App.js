import React from 'react';
import './App.css';
import NavbarComponent from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import ImageComponent from './components/Image/Image'

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Home/>
      <ImageComponent/>
      <Footer/>
    </div>
  );
}

export default App;
