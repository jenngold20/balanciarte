import React from 'react';
import './App.css'; 
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-100 font-sans">
      <Header />
      <Home />
      <Services />
      <About />
      <Contact />
     
    </div>
  );
}

export default App;