import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  // About content
  const aboutContent = {
    description: "Christian Soul Winners Theological College is dedicated to equipping leaders for global ministry. Since 2014, we have been preparing servants of God to reach the nations with the gospel of Jesus Christ.",
    mission: "Our mission is to provide a nurturing and inclusive environment that fosters academic excellence, personal growth, and social responsibility. We are committed to empowering students to become lifelong learners and responsible global citizens.",
    vision: "Our vision is to be a leading educational institution that inspires innovation, creativity, and critical thinking. We aim to cultivate a community of learners who are equipped to meet the challenges of the future and contribute positively to society."
  };

  // Function to handle redirection to Programs page
  const handleProgramsClick = () => {
    navigate('/programs');
  };

  return (
    <div className="about-container">
      <h1>About Christian Soul Winners Theological College</h1>
      <div className="about-content">
        <p className="description">{aboutContent.description}</p>
        <h2>Our Mission</h2>
        <p>{aboutContent.mission}</p>
        <h2>Our Vision</h2>
        <p>{aboutContent.vision}</p>
      </div>
      <button
        className="programs-button"
        onClick={handleProgramsClick}
      >
        Programs Offered
      </button>
    </div>
  );
};

export default About;