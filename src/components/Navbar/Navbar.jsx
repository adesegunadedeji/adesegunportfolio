import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function NavbarComponent (){
        return (
<div className="NavbarComponent">
  <header className="active-navbar">
    <div className="container logo-left-menu-right">
	    <div className="logo navbar-left">
       <a href="/"className="a-Logo" title="Ade Adedeji">ade adedeji</a>
      </div>
      <nav className="navbar-right">
        <ul className="menu"> 
        <li className="menu-item"><Link className="menu-Logo"  to ="/about"><span>About</span></Link></li>
        <li className="menu-item"><Link className="menu-Logo"  to ="/projects"><span>Projects</span></Link></li>
        <li className="menu-item"><a className="menu-Logo" href="mailto:adesegunadedeji@gmail.com"><span>Contact</span></a></li>
        </ul></nav>
        {/* <div class="hamburger navbar-right semplice-menu"><a href="#"class="open-menu menu-icon"><span></span></a></div> */}
    </div>
  </header>
</div>)
}
export default NavbarComponent