import React from "react";
import "./AboutUs.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Visits()
{
    return (
        <div className="about-container">
          <div className="hero-section">
            <h1><center>Welcome to Velvet Orchid Service</center></h1>
            <p>Experience luxury, comfort, and elegance with world-class hospitality.</p>
          </div>
    
          <section className="about-content">
            <h2>Why Choose Velvet Orchid  Website?</h2>
            <p>Located in the heart of the city, our hotel offers an exceptional stay with top-notch services.</p>
    
            <div className="features">
              <div className="feature-box">
                <h3>🏨 Elegant Rooms & Suites</h3>
                <p>Spacious, well-furnished rooms designed for ultimate relaxation.</p>
              </div>
              <div className="feature-box">
                <h3>🍽️ Fine Dining & Gourmet Experience</h3>
                <p>A variety of international and local cuisines prepared by expert chefs.</p>
              </div>
              <div className="feature-box">
                <h3>🎉 Banquet & Event Halls</h3>
                <p>Perfect for weddings, conferences, and private gatherings.</p>
              </div>
              <div className="feature-box">
                <h3>💆 Spa & Wellness</h3>
                <p>Rejuvenate with world-class spa treatments and wellness programs.</p>
              </div>
            </div>
          </section>
    
          <section className="offers-section">
            <h2>Exclusive Offers & Discounts</h2>
            <ul>
              <li>✨ <strong>Early Bird Discount:</strong> Up to 30% off on advanced bookings.</li>
              <li>✨ <strong>Weekend Getaway:</strong> Free spa access with a weekend stay.</li>
              <li>✨ <strong>Business Traveler Package:</strong> Includes breakfast & high-speed Wi-Fi.</li>
              <li>✨ <strong>Honeymoon Special:</strong> Romantic dinner & complimentary wine.</li>
            </ul>
          </section>
    
          <section className="contact-section">
            <h2>Contact Us</h2>
            <p><FaMapMarkerAlt /> 123 Velvet Orchid Street, Luxury City</p>
            <p><FaPhone /> +123-456-7890</p>
            <p><FaEnvelope /> contact@velvetorchid.com</p>
            <div className="social-links">
              <a href="https://www.facebook.com/" target="_blank"><FaFacebook /></a>
              <a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a>
              <a href="https://x.com/?lang=en-in&mx=2" target="_blank"><FaTwitter /></a>
            </div>
          </section>
        </div>
      );
}