import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/About'); 
  };

  return (
    <section className="hero">
      <div className="hero-content">
      <h1>Welcome to Christian Soul Winners Theological College</h1>
      <p>Equipping leaders for global ministry since 2014.</p>
        <button className="cta-button" onClick={handleLearnMore}>
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;

