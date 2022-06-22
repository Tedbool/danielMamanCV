import './App.css';
import Header from './Components/Header/Header';
import LandingPage from './Components/LandingPage/LandingPage';
import LeftSide from './Components/LeftSide/LeftSide';
import Projects from './Components/Projects/Projects';
import React, { useRef, useState } from 'react';
import useScrollSnap from 'react-use-scroll-snap';
import About from './Components/About/About';
import disableScroll from 'disable-scroll';

function App() {
  const scrollRef = useRef(null);
  disableScroll.on();
  useScrollSnap({ ref: scrollRef, duration: 150, delay: 50}, disableScroll.off())
  
  return (
    <div className="App" ref={scrollRef}>
      <Header/>
      <LeftSide/>
      <LandingPage/>
      <Projects/>
      <About/>
      
    </div>
  );
}

export default App;
