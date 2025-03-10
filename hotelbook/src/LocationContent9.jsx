import './Locationplaces.css';
import { useState,useEffect } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate,useLocation } from 'react-router-dom';
import { IoMdHeart } from "react-icons/io";
import { FaWifi, FaUsers, FaConciergeBell, FaDoorOpen, FaBath, FaTv, FaUtensils, FaShieldAlt } from "react-icons/fa";
const defaultHotel = { 
  review:"⭐⭐⭐⭐",
   name: "The St. Regis Mumbai",
  location: "Mumbai, India",
  image: "https://www.dreamzkraft.com/admin/venueThumbnailImage/5d9f1b22949a3__st-regis.jpg",
  rating:"8.6",
  reviews:"920 reviews",
  day:"1 day,2 adults",
  rupees:"₹ 4,999",
  tax:"+₹200 taxes and charges",
  path:"/hotel/TheSt.RegisMumbai",
}; 
function Overview9()
{
    const images = [
        { id: 1, src: "https://www.dreamzkraft.com/admin/venueThumbnailImage/5d9f1b22949a3__st-regis.jpg", alt: "Main Image", type: "large" },
        { id: 2, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/504828179.jpg?k=a47f1fc785e21eff02d09ed9d17b572b4923e3e2306a93f3ab72e4c42cd5e9ab&o=&hp=1", alt: "Reception", type: "small" },
        { id: 3, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/538777323.jpg?k=7758db36a540d2b8021f16a2af7177c0322b6a521b486a7e50b2be89620d64f5&o=&hp=1", alt: "Room 1", type: "small" },
        { id: 4, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/538776114.jpg?k=7ff31060c94937d38de05a18b90d9802a5509bb3172e53b21fff1448150e1108&o=&hp=1", alt: "Room 2", type: "small" },
        { id: 5, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/482948980.jpg?k=afd45fda3afeb9eff62b8906a2ec608cd02c8b462db63acd5b3da0e65b1d7e8a&o=&hp=1", alt: "Building", type: "small" },
        { id: 6, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/479377080.jpg?k=2aaa5fc685e1d2d2cbf8e2a9f7bfbd470aa6631fc214a6cbbeb103c4deb58dfa&o=&hp=1", alt: "More Photos", type: "large" },
        { id: 7, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/480071152.jpg?k=c08d35bef0a89422d1515dc4f111d14959da5c40902810ae2bb1e53a3ca106b0&o=&hp=1", alt: "Room 2", type: "small" },
        { id: 8, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/467624705.jpg?k=48e601ec8bb2be1c112d06a8803c119bf84135d6db2695ee167669a2f7b7462e&o=&hp=1", alt: "Main Image", type: "large" },
      
      ];
      const [isOpen,setIsOpen]=useState(false);
      const [selectedImage, setSelectedImage] = useState(null);
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
      const navigate = useNavigate();
      const [isFavorite, setIsFavorite] = useState(false); 
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
          navigate("/bookingform");
        } else {
          alert("Please log in to make a reservation!");
          navigate('/login', { state: { from: location.pathname } });
        }
      };
      return (
        <>
          <div className="location-head">
          <div className="title-container">
            <h1>The St. Regis Mumbai</h1>
            <p><FaLocationDot style={{ color: "red" }} />462, Senapati Bapat Marg, Worli, 400013 Mumbai, India</p></div>
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
              <img src={images[0].src} alt={images[0].alt}  onClick={()=>openPopup(images[0])} />
            </div>
            <div className="small-images">
              {images.slice(1, 7).map((img) => (
                <div key={img.id} className="image-box">
                  <img src={img.src} alt={img.alt}  onClick={()=>openPopup(img)} />
                </div>
              ))}
            </div>
            <div className="main-image">
              <img src={images[7].src} alt={images[7].alt}   onClick={()=>openPopup(images[7])} />
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
            <p>🌟The St. Regis Mumbai, South Asia's first St. Regis property, is a beacon of luxury situated in the heart of Mumbai's financial and entertainment districts. Located in Lower Parel, the hotel offers panoramic views of the cityscape, including the Mahalaxmi Racecourse and the Arabian Sea. </p>
            <p>🌟Its prime location provides guests with immediate access to premium shopping, dining, and entertainment venues, as well as proximity to major commercial business districts.</p>
            <p>🌟Accommodations: The hotel boasts 395 elegantly appointed guest rooms and suites, each designed to provide a blend of comfort and sophistication. For extended stays or families seeking additional space, the lavishly designed one-bedroom apartments are an ideal choice.</p>
          </div>
        </>
      );
    
}
const hotel = {
  review:"⭐⭐⭐⭐",
  name: "The St. Regis Mumbai",
 location: "Mumbai, India",
 image: "https://www.dreamzkraft.com/admin/venueThumbnailImage/5d9f1b22949a3__st-regis.jpg",
 rating:"8.6",
 reviews:"920 reviews",
 day:"1 day,2 adults",
 rupees:"₹ 4,999",
 tax:"+₹200 taxes and charges",
 path:"/hotel/TheSt.RegisMumbai",
};
function Info9()
{
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

function Facilities9()
{
    return (
        <div className="container">
          <h1>Facilities of The St. Regis Mumbai</h1>
    
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

function Reviews9()
{
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
export {Overview9,Info9,Facilities9,Reviews9,hotel};
