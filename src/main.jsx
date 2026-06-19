import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/nav';
import Hero from './components/hero';
import Skills from './components/skills';
import Experience from './components/experience';
import Education from './components/education';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <Skills />
    <Experience />
    <Projects />
    <Education />
    <Contact />
    <Footer />
  </React.StrictMode>
);
