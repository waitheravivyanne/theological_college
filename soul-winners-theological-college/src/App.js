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
      <section className="introduction">
        <h2>Welcome to Christian Soul Winners Theological College</h2>
        <h3>
          Foundation: "Christian Soul Winners Theological College was founded in 2014 with the purpose of serving the Body of Christ in preparing the servants of God to reach the nations with the gospel of the Lord Jesus Christ. We value quality and excellence and strive to see that we are obedient to God in reaching the nations."
        </h3>
      </section>

      {/* Display image1 */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img
          src={image1}
          alt="College Teachers during graduation" // Use descriptive alt text
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
        />
      </div>

      {/* Display image2 */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img
          src={image2}
          alt="Students Graduating" // Use descriptive alt text
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
      <BackIcon excludeRoutes={['/']} /> {/* Exclude back icon on the landing page */}
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