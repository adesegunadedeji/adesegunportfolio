import React from 'react'
import './Navbar.css'
function NavbarComponent (){
        return (
<div className="NavbarComponent">
  <header className="active-navbar">
    <div className="container logo-left-menu-right">
	    <div className="logo navbar-left">
       <a href="https://www.adeadedeji.com"className="a-Logo" title="Ade Adedeji">ade adedeji</a>
      </div>
      <nav className="navbar-right">
        <ul className="menu"> 
        <li className="menu-item"><a className="menu-Logo"  href="https://www.adeadedeji.com/about"><span>About</span></a></li>
        <li className="menu-item"><a className="menu-Logo"  href="https://www.adeadedeji.com/projects"><span>Projects</span></a></li>
        <li className="menu-item"><a className="menu-Logo" href="mailto:adesegunadedeji@gmail.com"><span>Contact</span></a></li>
        </ul></nav>
        {/* <div class="hamburger navbar-right semplice-menu"><a href="#"class="open-menu menu-icon"><span></span></a></div> */}
    </div>
  </header>
</div>)
}
export default NavbarComponent