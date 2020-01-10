import React from 'react';
import './App.css';
import NavbarComponent from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer'
import {Route, Switch,BrowserRouter as Router} from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects'
import About from './components/About/About'
function App() {
  return (
    <div className="App">
      <Router>
      <NavbarComponent/>
        <Switch>
       <Route exact path ='/about' component ={About}/>
       <Route  exact path ='/projects' component ={Projects}/>
       <Route  exact path ='/' component ={Landing}/> 
       </Switch>
       </Router>
      <Footer/>
    </div>
  );
}

export default App;
