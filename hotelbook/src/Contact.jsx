import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Contact.css';

export default function Contacts() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const navigate = useNavigate();

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLoggedIn) {
            console.log("Form Submitted:", formData);
            alert("Thank you for contacting us! We will get back to you soon.");
            setFormData({ name: "", email: "", message: "" });
        } else {
            alert("Please log in to send a message!");
            navigate('/login');
        }
    };

    return (
        <div className="contact-backgroundpic">
            <div className="contact-container">
                <h2>Contact Us</h2>
                <div className="contact-info">
                    <p><strong>📍 Address:</strong> 123 Orchid Street, Cityname, State, Zip</p>
                    <p><strong>📞 Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>✉️ Email:</strong> support@velvetorchidhotel.com</p>
                </div>
            
               
                  <form className="contact-form" onSubmit={handleSubmit}>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={!isLoggedIn} 
                        />

                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={!isLoggedIn} 
                        />

                        <label>Message:</label>
                        <textarea
                            name="message"
                            placeholder="How can we help you?"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={!isLoggedIn} 
                        ></textarea>

                        <button type="submit" disabled={!isLoggedIn}>Send Message</button>
                     
                         {!isLoggedIn && <p className="login-message">Please <span className="login-redirect" onClick={() => navigate('/login')}>log in</span> to send a message.</p>}
                    </form>
                
                <div className="social-links">
                    <h3>Follow Us</h3>
                    <a href="https://facebook.com/VelvetOrchidHotel" target="_blank" rel="noopener noreferrer">Facebook</a> |
                    <a href="https://instagram.com/VelvetOrchidHotel" target="_blank" rel="noopener noreferrer"> Instagram</a> |
                    <a href="https://twitter.com/VelvetOrchid" target="_blank" rel="noopener noreferrer"> Twitter</a>
                </div>
            </div>
        </div>
    )
}
