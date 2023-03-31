import React from 'react';

import Banner from './components/Banner';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Experiences from './components/Experiences';
import Contact from './components/Contact';

import './styles/global.css'

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <NavBar />
      <About />
      <Services />
      <Work />
      <Experiences/>
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
