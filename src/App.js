import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Start from './components/Start';
import Url from './components/Url';
import Stats from './components/Stats';
import Boost from './components/Boost';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Start/>
      <Url/>
      <Stats/>
      <Boost/>
      <Footer/>
    </div>
  );
}

export default App;
