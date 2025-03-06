import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import Programs from './components/Programs';
// import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  return (
    <>
      <Navbar /> {/* Navbar should be outside Routes */}

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <MissionVision />
            <Programs />
          </>
        } />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/programs" element={<Programs />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer /> {/* Footer should be outside Routes */}
    </>
  );
};

export default App;
