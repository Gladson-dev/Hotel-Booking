import React from 'react';
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Manage your trips</a></li>
            <li><a href="#">Contact Customer Service</a></li>
            <li><a href="#">Safety resource centre</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Discover</h3>
          <ul>
            <li><a href="#">Genius loyalty programme</a></li>
            <li><a href="#">Seasonal and holiday deals</a></li>
            <li><a href="#">Travel articles</a></li>
            <li><a href="#">Booking.com for Business</a></li>
            <li><a href="#">Traveller Review Awards</a></li>
            <li><a href="#">Car hire</a></li>
            <li><a href="#">Flight finder</a></li>
            <li><a href="#">Restaurant reservations</a></li>
            <li><a href="#">Booking.com for Travel Agents</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Terms and Settings</h3>
          <ul>
            <li><a href="#">Privacy & cookies</a></li>
            <li><a href="#">Terms and conditions</a></li>
            <li><a href="#">Grievance officer</a></li>
            <li><a href="#">Modern Slavery Statement</a></li>
            <li><a href="#">Human Rights Statement</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Partners</h3>
          <ul>
            <li><a href="#">Extranet login</a></li>
            <li><a href="#">Partner help</a></li>
            <li><a href="#">List your property</a></li>
            <li><a href="#">Become an affiliate</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><a href="#">About Booking.com</a></li>
            <li><a href="#">How we work</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Press centre</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investor relations</a></li>
            <li><a href="#">Corporate contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <img src="icons.png" alt="Velvet Orchid Hotel" />
          <p >Velvet Orchid .com</p>
        </div>
        <div className="footer-copyright">
          <p>© 1996–2025 Velvet Orchid .com™. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
