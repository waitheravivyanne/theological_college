import React from 'react';

const Contacts = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Location: Nairobi, Kenya</p>
      <p>Email: soulwinnersintl@gmail.com</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contacts;