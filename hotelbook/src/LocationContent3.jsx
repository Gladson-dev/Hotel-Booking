import './Locationplaces.css';
import { useState ,useEffect} from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate,useLocation } from 'react-router-dom';
import { IoMdHeart } from "react-icons/io";
import { FaWifi, FaUsers, FaConciergeBell, FaDoorOpen, FaBath, FaTv, FaUtensils, FaShieldAlt } from "react-icons/fa";
const defaultHotel = { 
  review:"⭐⭐⭐⭐⭐",
   name: "Hotel City Tower",
  location: "Chennai, India",
  image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201107211701376365-37eb7268b43f11e9adaa0a4cef95d023.jpg",
  rating:"7.8",
  reviews:"1200 reviews",
  day:"1 day,2 adults",
  rupees:"₹ 4,845",
  tax:"+₹150 taxes and charges",
  path:"/hotel/HotelCityTower",
}; 
function Overview3({ hotel = defaultHotel })
{
    const images = [
        { id: 1, src: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201107211701376365-37eb7268b43f11e9adaa0a4cef95d023.jpg", alt: "Main Image", type: "large" },
        { id: 2, src: "https://htl-img-res-new.s3.ap-south-1.amazonaws.com/5454/20231222/1.jpg", alt: "Reception", type: "small" },
        { id: 3, src: "https://img.directhotels.com/in/chennai/hotel-city-tower/3.jpg", alt: "Room 1", type: "small" },
        { id: 4, src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/01/32/8b/city-tower-hotel.jpg?w=700&h=-1&s=1", alt: "Room 2", type: "small" },
        { id: 5, src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/57/6b/73/city-tower-hotel.jpg?w=700&h=-1&s=1", alt: "Building", type: "small" },
        { id: 6, src: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH7P217262244208/QS1042/QS1042-Q1/1609998757470.jpeg", alt: "More Photos", type: "large" },
        { id: 7, src: "https://image.wedmegood.com/resized/800X/uploads/member/1304776/1592542153_48986987_466186333910129_1574088557453115392_n.jpg", alt: "Room 2", type: "small" },
        { id: 8, src: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200701151240288196-18d00c28014f11eba07a0242ac110002.jpg", alt: "Main Image", type: "large" },
      
      ];
      const [isOpen,setIsOpen]=useState(false);
      const [selectedImage, setSelectedImage] = useState(null);
      const [isFavorite, setIsFavorite] = useState(false); 
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
            <h1>Hotel City Tower</h1>
            <p><FaLocationDot style={{ color: "red" }} /> Chennai City Center,Egmore,Chennai-3.3 km,  Tamil Nadu, India</p>
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
              <img src={images[0].src} alt={images[0].alt}  onClick={()=>openPopup(images[0])}  />
            </div>
            <div className="small-images">
              {images.slice(1, 7).map((img) => (
                <div key={img.id} className="image-box">
                  <img src={img.src} alt={img.alt}  onClick={()=>openPopup(img)} />
                </div>
              ))}
            </div>
            <div className="main-image">
              <img src={images[7].src} alt={images[7].alt}  onClick={()=>openPopup(images[7])} />
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
            <p>🌟Conveniently located near Chennai Central Railway Station, the hotel provides easy access to various city attractions.The hotel also offers free private parking, room service, and a 24-hour front desk to cater to guests' needs. </p>
            <p>🌟The Hotel provides easy access to various city attractions. Guests can enjoy air-conditioned rooms equipped with free Wi-Fi, flat-screen TVs, and private bathrooms. </p>
            <p>🌟Accommodation: The hotel features 60 well-appointed rooms designed for comfort. Each room includes air conditioning, a seating area, and complimentary toiletries. For dining, there's an on-site restaurant serving Indian cuisine, with halal options available upon request.</p>
          </div>
        </>
      );
    
}
const hotel = {
  review:"⭐⭐⭐⭐⭐",
  name: "Hotel City Tower",
 location: "Chennai, India",
 image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201107211701376365-37eb7268b43f11e9adaa0a4cef95d023.jpg",
 rating:"7.8",
 reviews:"1200 reviews",
 day:"1 day,2 adults",
 rupees:"₹ 4,845",
 tax:"+₹150 taxes and charges",
 path:"/hotel/HotelCityTower",
};
function Info3()
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
function Facilities3()
{
    return (
        <div className="container">
          <h1>Facilities of Hotel City Tower</h1>
    
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

function Reviews3()
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
export {Overview3,Info3,Facilities3,Reviews3,hotel};
