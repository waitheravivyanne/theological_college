import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import Programs from './components/Programs';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './styles.css';
import About from './components/About';
import image1 from './images/image1.jpeg'; // Correct import path
import image2 from './images/image2.jpeg'; // Correct import path
import BackIcon from './components/BackIcon';

const Home = () => {
  return (
    <>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img
          src={image1}
          alt="College Teachers during graduation"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
        />
      </div>

      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img
          src={image2}
          alt="Students Graduating"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
        />
      </div>

      <Hero />
    </>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <BackIcon excludeRoutes={['/']} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/MissionVision" element={<MissionVision />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;