import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Leadership />
      <Contact />
    </div>
  );
}

export default App;
