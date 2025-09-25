import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
 }
    return (  
<nav className="navbar">
        <a href="#" className="logo">Portfolio.</a>
        <ul className={isMenuOpen ? 'active' : ''}>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
           <li><a href="#certification">Certification</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
        </div>
      </nav>

    );
  }
    export default Navbar; 