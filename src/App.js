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
    <Router>
    <div className="App">
     
      <NavbarComponent/>
        <Switch>
       <Route  path ='/about' component ={About}/>
       <Route  path ='/projects' component ={Projects}/>
       <Route  exact path ='/' component ={Landing}/> 
       </Switch>
     
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
