import React from 'react';

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or need further information, feel free to reach out to us.</p>

      <div className="contact-info">
        <h2>Email</h2>
        <p>
          <a href="mailto:info@soulwinnersintl@gmail.com">
            info@soulwinnersintl@gmail.com
          </a>
        </p>
      </div>

      <div className="contact-info">
        <h2>Phone</h2>
        <p>+254.........</p>
      </div>

      <div className="contact-info">
        <h2>Address</h2>
        <p>Nairobi, Kenya</p>
      </div>
    </div>
  );
};

export default Contacts;