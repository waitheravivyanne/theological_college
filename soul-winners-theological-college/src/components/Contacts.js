import React, { useState } from 'react';

const Contacts = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('http://localhost:5000/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setPopupMessage('Your message has been delivered!');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        setPopupMessage('Failed to send message. Please try again.');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setPopupMessage('An error occurred. Please try again.');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Location: Nairobi, Kenya</p>
      <p>Email: vivyannexeirah@gmail.com</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>

      {/* Pop-up for success/error message */}
      {showPopup && (
        <div className="popup">
          <p>{popupMessage}</p>
        </div>
      )}
    </section>
  );
};

export default Contacts;