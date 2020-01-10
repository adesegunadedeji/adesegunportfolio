import React from 'react';
import './App.css';
import NavbarComponent from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer'
import {Route, Switch, Redirect} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects'
import About from './components/About/About'


function App() {
  return (
    <div className="RootApp">
      <NavbarComponent/>
      <Switch>
        <Route path ="/projects" component = {Projects}/>
        <Route path ="/about" component = {About}/>
       <Route exact path ='/'component ={Landing}/>
       <Redirect to='/'/>
       </Switch>
      <Footer/>
    </div>
  );
}

export default App;
