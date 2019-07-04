import React from 'react';
import './App.css';

import Cover from './components/Cover';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Cover />
      <Header />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </div >
  );
}

export default App;
