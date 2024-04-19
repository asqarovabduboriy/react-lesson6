import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar.js'
import Hero from './Components/Hero/Hero.js';
import Main from './Components/Main/Main.js';
import Card from './Components/Card/Card.js';
import Banner from './Components/Banner/Banner.js';
import Endcard from './Components/EndCard/Endcard.js';
import Footer from './Components/Footer/Footer.js';

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Main/>
    <Card/>
    <Banner/>
    <Endcard/>
    <Footer/>
    </>
  );
}

export default App;
