import React from 'react';
// import './styles.css'; // Ensure you have the necessary CSS for styling

const Programs = () => {
  const programs = [
    {
      title: 'Diploma in Theology and Biblical Studies',
      description: 'Gain foundational knowledge in theology and biblical studies to serve in ministry.',
      image: 'path/to/diploma-image.jpg', // Replace with actual image path
    },
    {
      title: 'Degree in Theology and Biblical Studies',
      description: 'Deepen your understanding of theology and prepare for advanced ministry roles.',
      image: 'path/to/degree-image.jpg', // Replace with actual image path
    },
    {
      title: 'Postgraduate Studies in Theology',
      description: 'Pursue advanced studies and research in theology and related fields.',
      image: 'path/to/postgraduate-image.jpg', // Replace with actual image path
    },
    {
      title: 'Christian Education',
      description: 'Equip yourself to teach and lead in Christian educational settings.',
      image: 'path/to/christian-edu-image.jpg', // Replace with actual image path
    },
  ];

  return (
    <section className="programs">
      <h2>Programs Offered</h2>
      <div className="programs-grid">
        {programs.map((program, index) => (
          <div className="card" key={index}>
            <img src={program.image} alt={program.title} />
            <div className="card-content">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programs;