import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Home setActiveSection={setActiveSection} />
        <About />
        <Skills />
      </main>
    </div>
  );
}