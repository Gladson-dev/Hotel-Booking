import React from "react";
import "./WelcomePage.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const WelcomePage = ({ onStart }) => {

  const handleBookNow = () => {
        onStart();  
    };

    const hotelImages = [
        "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
        "https://3.imimg.com/data3/JV/KJ/MY-15827078/hotels-booking.jpg",
        "https://turkanawildlifesafaris.com/wp-content/uploads/2024/02/220803-compasshotel-medford-pool-73868-1677873697.jpg",
        "https://imageio.forbes.com/specials-images/imageserve/66c45d7de75fecb46cec38be/Dubai-Marina/0x0.jpg?format=jpg&height=972&width=1457",
        "https://image-tc.galaxy.tf/wijpeg-dxkwbf24v9ox0aahco719znaw/the-fullerton-ocean-park-hotel-hong-kong-hotel-exterior-2.jpg?rotate=0&crop=227%2C175%2C1424%2C712&width=1980&height=890",
    ];

    const carouselSettings = {
        additionalTransfrom: 0,
        arrows: false,
        autoPlay: true,
        autoPlaySpeed: 3000,
        centerMode: false,
        className: "",
        infinite: true,
        pauseOnHover: false,
        slidesToSlide: 1,
        swipeable: true,
    };

    return (
        <div className="welcome-container">
            <div className="hero">
                <h1>Welcome to Orchid Stay</h1>
                <p>Experience luxury and comfort at the world's finest hotels.</p>
                <button className="cta-button" onClick={handleBookNow}>
                    Book Now
                </button>
            </div>
            <div className="carousel-container">
                <Carousel responsive={{ 
                    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 } 
                }} {...carouselSettings}>
                    {hotelImages.map((src, index) => (
                        <img key={index} src={src} alt={`Hotel ${index + 1}`} className="carousel-image" />
                    ))}
                </Carousel>
            </div>
            <div className="testimonials">
                <h2>What Our Guests Say</h2>
                <div className="testimonial-card">
                    <p>⭐⭐⭐⭐⭐ "A fantastic experience! The hotel was beyond my expectations!"</p>
                    <h4>- Sophia M.</h4>
                </div>
                <div className="testimonial-card">
                    <p>⭐⭐⭐⭐⭐ "Seamless booking process and excellent customer support!"</p>
                    <h4>- Daniel R.</h4>
                </div>
            </div>
            <footer className="footers">
                <p>📧 Contact us: support@orchidstay.com | ☎ +1 234 567 890</p>
                <p>© 2025 Orchid Stay. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default WelcomePage;
