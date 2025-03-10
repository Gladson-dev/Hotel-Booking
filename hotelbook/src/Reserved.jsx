import React, { useState, useEffect } from "react";
import "./Reserved.css";

const Reserved = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        try {
            const storedBookings = localStorage.getItem("bookingData");
            if (storedBookings) {
                setBookings(JSON.parse(storedBookings));
            }
        } catch (e) {
            console.error("Error reading from localStorage:", e);
        }
    }, []);

    const handleCancelBooking = (bookingId) => { 
        try {
            const updatedBookings = bookings.filter(
                (booking) => booking.id !== bookingId
            );
            setBookings(updatedBookings);
            localStorage.setItem("bookingData", JSON.stringify(updatedBookings));

            alert("Booking Canceled!");
        } catch (e) {
            console.error("Error removing from localStorage:", e);
            alert("There was a problem removing your booking data locally.");
        }
    };

    return (
        <div className="reserved-container">
            {bookings.length > 0 ? (
                bookings.map((booking) => (
                    <>
                    <h2>Your Reservation Details</h2>
                    <div key={booking.id} className="reserved-card">
                        <img 
                            src={booking.hotel.image} 
                            alt={booking.hotel.name} 
                            className="reserved-image" 
                        />
                        <div className="reserved-details">
                            <h3>{booking.hotel.name}</h3>
                            <p><i className="fas fa-map-marker-alt"></i> {booking.hotel.location}</p>
                            <p><b>CheckIn Date:</b> {booking.personalDetails.checkInDate}</p>
                            <p><b>CheckOut Date:</b> {booking.personalDetails.checkOutDate}</p>
                            <p><b>Adults:</b> {booking.travelers.adults}</p>
                            <p><b>Children:</b> {booking.travelers.children}</p>
                            <p><b>Rooms:</b> {booking.travelers.rooms}</p>
                            <p><b>Email:</b> {booking.personalDetails.email}</p>
                            <p><b>Phone:</b> {booking.personalDetails.phone}</p>
                            <button onClick={() => handleCancelBooking(booking.id)}>Cancel Booking</button>
                        </div>
                    </div>
                    </>
                ))
            ) : (
                <div className="no-booking">
                    <h2>Your Reservation Details</h2>
                    <p>No booking data available.</p>
                </div>
            )}
        </div>
    
    );
};

export default Reserved;
