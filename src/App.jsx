
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import Education from './Pages/Education/Education';
import Experience from './Pages/Experience/Experience';
import Certifications from './Pages/Certification/Certification';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="section" id="home"><Home /></div>
      <div className="section" id="about"><About /></div>
      <div className="section" id="skills"><Skills /></div>
      <div className="section" id="projects"><Projects /></div>
      <div className="section" id="education"><Education /></div>
      <div className="section" id="experience"><Experience /></div>
      <div className="section" id="certification"><Certifications /></div>
      <div className="section" id="contact"><Contact /></div>
      <Footer />
      
    </>
  );
}

export default App;