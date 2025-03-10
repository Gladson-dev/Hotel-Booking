import './Locationplaces.css';
import { useState, useEffect } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { useNavigate, useLocation } from 'react-router-dom';
import { FaWifi, FaUsers, FaConciergeBell, FaDoorOpen, FaBath, FaTv, FaUtensils, FaShieldAlt } from "react-icons/fa";

const defaultHotel = {
  review: "⭐⭐⭐⭐",
  name: "Lemon Tree Hotel White",
  location: "Bengaluru, India",
  image: "https://i.pinimg.com/474x/3f/a2/6c/3fa26c3564eafc83ba09864b402f2c1a.jpg",
  rating: "6.7",
  reviews: "120 reviews",
  day: "1 day,2 adults",
  rupees: "₹ 2,845",
  tax: "+₹120 taxes and charges",
  path: "/hotel/LemonTreeHotelWhite",
};

function Overview({ hotel = defaultHotel }) {
  const images = [
    { id: 1, src: hotel.image || "https://i.pinimg.com/474x/3f/a2/6c/3564eafc83ba09864b402f2c1a.jpg", alt: "Main Image", type: "large" },
    { id: 2, src: "https://i.pinimg.com/474x/32/93/3c/32933c91239d8353b8895e10b01e6ed8.jpg", alt: "Reception", type: "small" },
    { id: 3, src: "https://i.pinimg.com/474x/99/61/78/99617806dcde8b098639f4121ea45336.jpg", alt: "Room 1", type: "small" },
    { id: 4, src: "https://i.pinimg.com/736x/1a/f6/72/1af67241bcb1744273fe089c4f4be234.jpg", alt: "Room 2", type: "small" },
    { id: 5, src: "https://cf.bstatic.com/xdata/images/hotel/max300/647720135.jpg?k=11d850dc10474cdc0ba2aa98a8433e625337da970fb7ce47be1b25a11bc4272e&o=", alt: "Building", type: "small" },
    { id: 6, src: "https://i.pinimg.com/474x/2e/c2/c3/2ec2c3cedd749fbdad3f058d319aa036.jpg", alt: "More Photos", type: "large" },
    { id: 7, src: "https://www.lemontreehotels.com/uploads/hotelgallery/04_Jul_2023_05_36_59Twin-Room-(1).jpg", alt: "Room 2", type: "small" },
    { id: 8, src: "https://www.lemontreehotels.com/uploads/hotelgallery/04_Jul_2023_05_38_32Lobby-(1).jpg", alt: "Main Image", type: "large" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isHotelFavorited = favorites.some((fav) => fav.name === hotel.name);
    setIsFavorite(isHotelFavorited);
  }, [hotel.name]);

  const openPopup = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!isFavorite) {
      favorites.push(hotel);
    } else {
      favorites = favorites.filter((fav) => fav.name !== hotel.name);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const handleReserveClick = () => {
    if (isLoggedIn) {
      navigate("/booking", { state: { hotel } }); 
    } else {
      alert("Please log in to make a reservation!");
      navigate('/login', { state: { from: location.pathname } });
    }
  };

  return (
    <>
      <div className="location-head">
        <div className="title-container">
          <h1>{hotel.name}</h1>
          <p>
            <FaLocationDot style={{ color: "red" }} /> 23 EPIP Zone, Whitefield,
            Bengaluru, Karnataka 560066, India
          </p>
        </div>
        <button className="reserve-button" onClick={handleReserveClick}>Reserve</button>
        <IoMdHeart
          color={isFavorite ? "red" : "white"}
          size={20}
          className="heart-icons"
          onClick={toggleFavorite}
        />
      </div>
      <div className="gallery-container">
        <div className="main-image">
          <img src={images[0].src} alt={images[0].alt} onClick={() => openPopup(images[0])} />
        </div>
        <div className="small-images">
          {images.slice(1, 7).map((img) => (
            <div key={img.id} className="image-box">
              <img src={img.src} alt={img.alt} onClick={() => openPopup(img)} />
            </div>
          ))}
        </div>
        <div className="main-image">
          <img src={images[7].src} alt={images[7].alt} onClick={() => openPopup(images[7])} />
        </div>
      </div>
      {isOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage?.src} alt={selectedImage?.alt} className="popup-image" />
          </div>
        </div>
      )}
      <div className="hotel-description">
        <p>🌟 Lemon Tree Hotel, Whitefield, Bengaluru, is a contemporary 4-star  establishment situated in the heart of Bengaluru's Whitefield – EPIP Zone. </p>
        <p>🌟 The hotel is in close proximity to major business hubs, including Accenture, SAP Labs, and Hewlett Packard, making it an ideal choice for business travelers.</p>
        <p>🌟 Accommodations: The hotel offers 130 well-appointed rooms  categorized into Superior and Deluxe types. Each room is designed for  comfort and convenience, featuring modern amenities such as air conditioning, flat-screen satellite TVs, tea/coffee makers, andwell-equipped bathrooms with shower cubicles.</p>
      </div>
    </>
  );
}

function Info() {
  const hotelRooms = [
    { guests: "4 Persons", price: 1857, taxes: 250, discount: "37% off", availability: "Available" },
    { guests: "3 Persons", price: 1684, taxes: 203, discount: "35% off", availability: "Available" },
    { guests: "2 Persons", price: 1446, taxes: 174, discount: "35% off", availability: "Available" },
    { guests: "1 Person", price: 1404, taxes: 169, discount: "35% off", availability: "Available" },
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Number of Guests</th>
            <th>Today's Price (₹)</th>
            <th>Taxes & Charges (₹)</th>
            <th>Discount</th>
            <th>Availability</th>
            <th>Your Choices</th>
          </tr>
        </thead>
        <tbody>
          {hotelRooms.map((room, index) => (
            <tr key={index}>
              <td>{room.guests}</td>
              <td>
                <span className="old-price">₹ {Math.round(room.price * 1.3)}</span><br />
                <strong>₹ {room.price}</strong>
              </td>
              <td>₹ {room.taxes}</td>
              <td><span className="discount-badge">{room.discount}</span></td>
              <td>{room.availability}</td>
              <td>
                <div className="your-choices">
                  <p>✔ <strong>Free cancellation</strong> anytime</p>
                  <p>✔ <strong>No prepayment needed</strong> – pay at the property</p>
                  <p className="no-credit">❌ <strong>No credit card needed</strong></p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Facilities() {
  return (
    <div className="container">
      <h1>Facilities of Lemon Tree Hotel</h1>

      <div className="popular-facilities">
        <h2>Most Popular Facilities</h2>
        <div className="icons">
          <span><FaWifi /> Free WiFi</span>
          <span><FaUsers /> Family rooms</span>
          <span><FaConciergeBell /> Room service</span>
          <span><FaDoorOpen /> 24-hour front desk</span>
        </div>
      </div>

      <div className="facilities-grid">
        <div className="facility">
          <h3><FaBath /> Bathroom</h3>
          <ul>
            <li>Towels</li>
            <li>Bath or shower</li>
            <li>Private bathroom</li>
            <li>Toilet</li>
          </ul>
        </div>

        <div className="facility">
          <h3><FaTv /> Media & Technology</h3>
          <ul>
            <li>Flat-screen TV</li>
            <li>Cable channels</li>
            <li>Satellite channels</li>
          </ul>
        </div>

        <div className="facility">
          <h3><FaUtensils /> Kitchen</h3>
          <ul>
            <li>Cleaning products</li>
          </ul>
        </div>

        <div className="facility">
          <h3><FaShieldAlt /> Safety & Security</h3>
          <ul>
            <li>Fire extinguishers</li>
            <li>CCTV in common areas</li>
            <li>Key card access</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Reviews() {
  const [selectedRating, setSelectedRating] = useState(null);
  const reviewData = {
    score: 7.5,
    ratingText: "Very Good",
    totalReviews: 320,
    highlights: [
      { category: "Location", rating: 8.2 },
      { category: "Service", rating: 7.9 },
      { category: "Cleanliness", rating: 7.3 },
      { category: "Facilities", rating: 6.8 },
      { category: "Value for Money", rating: 7.0 },
    ],
  };
  const ratings = [
    { label: "Exceptional (9+)", color: "#4CAF50" },
    { label: "Excellent (8-9)", color: "#2196F3" },
    { label: "Very Good (7-8)", color: "#FFC107" },
    { label: "Good (6-7)", color: "#FF9800" },
    { label: "Below Expectation (<6)", color: "#F44336" },
  ];

  return (
    <>
      <div>
        <h1><center>Ratings and Reviews</center></h1>
      </div>
      <div className="review-card">
        <div className="left-panel">
          <div className="score-box">
            <h2>{reviewData.score}</h2>
            <p className="rating-text">{reviewData.ratingText}</p>
            <p className="review-count">{reviewData.totalReviews} reviews</p>
          </div>
        </div>

        <div className="right-panel">
          <h3>Guest Ratings</h3>
          {reviewData.highlights.map((item, index) => (
            <div key={index} className="rating-row">
              <span>{item.category}</span>
              <div className="rating-bar">
                <div
                  className="rating-fill"
                  style={{ width: `${(item.rating / 10) * 100}%` }}
                ></div>
              </div>
              <span className="rating-score">{item.rating}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rating-filter">
        <h3>Select Rating Range</h3>
        <div className="rating-buttons">
          {ratings.map((rating, index) => (
            <button
              key={index}
              className={`rating-button ${selectedRating === rating.label ? "selected" : ""}`}
              style={{
                backgroundColor: selectedRating === rating.label ? rating.color : "#f0f0f0",
              }}
              onClick={() => setSelectedRating(rating.label === selectedRating ? null : rating.label)}
            >
              {rating.label} <span className="rating-count"></span>
            </button>
          ))}
        </div>
        {selectedRating && <p className="selected-info">Selected Rating: {selectedRating}</p>}
      </div>
    </>
  );
}

export { Overview, Info, Facilities, Reviews };
