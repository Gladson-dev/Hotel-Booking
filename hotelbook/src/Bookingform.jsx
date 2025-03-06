import React, { useState } from "react";
import "./Booking.css"; 

const BookingForm = () => {
  const today = new Date().toISOString().split("T")[0]; 
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1); 
  const maxDateString = maxDate.toISOString().split("T")[0]; 

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    specialRequests: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.checkInDate) newErrors.checkInDate = "Check-in date is required";
    if (!formData.checkOutDate) newErrors.checkOutDate = "Check-out date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Booking Confirmed!");
    }
  };

  return (
    <div className="booking-container">

      <div className="progress-bar">
        <div className="step completed">
          <span className="circle">✔</span>
          <span>Your selection</span>
        </div>
        <div className="line"></div>
        <div className="step active">
          <span className="circle">2</span>
          <span>Your details</span>
        </div>
        <div className="line"></div>
        <div className="step">
          <span className="circle">3</span>
          <span>Finish booking</span>
        </div>
      </div>

      <h2 id="title-booking">Hotel Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} id="user-details" />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} id="user-details" />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} id="user-details"/>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} id="user-details"/>
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Check-in Date</label>
          <input 
            type="date" 
            name="checkInDate" 
            value={formData.checkInDate} 
            onChange={handleChange} 
            min={today} 
            max={maxDateString}
            id="user-details"
          />
          {errors.checkInDate && <span className="error">{errors.checkInDate}</span>}
        </div>

        <div className="form-group">
          <label>Check-out Date</label>
          <input 
            type="date" 
            name="checkOutDate" 
            value={formData.checkOutDate} 
            onChange={handleChange} 
            min={formData.checkInDate || today} 
            max={maxDateString}
            id="user-details"
          />
          {errors.checkOutDate && <span className="error">{errors.checkOutDate}</span>}
        </div>

        <div className="form-group">
          <label>Special Requests (Optional)</label>
          <textarea name="specialRequests" value={formData.specialRequests} onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="button-booking">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
