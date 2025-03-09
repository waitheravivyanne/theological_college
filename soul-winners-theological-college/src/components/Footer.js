import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/contact">Contact</a></li>
            <li>
              <a href="mailto:info@soulwinnersintl@gmail.com">
                info@soulwinnersintl@gmail.com
              </a>
            </li>

          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
      <p>Location: Nairobi, Kenya</p>
        <p>&copy; {new Date().getFullYear()} Christian Soul Winners Theological College. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;