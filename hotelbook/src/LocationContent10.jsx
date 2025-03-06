import './Locationplaces.css';
import { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { IoMdHeart } from "react-icons/io";
import { FaWifi, FaUsers, FaConciergeBell, FaDoorOpen, FaBath, FaTv, FaUtensils, FaShieldAlt } from "react-icons/fa";
function Overview10()
{
    const images = [
        { id: 1, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/17181467.jpg?k=73b25a9cb3b5e18877cf578c8d146a1ba4ff213a6bf3801f4480a0337bac1b1f&o=&hp=1", alt: "Main Image", type: "large" },
        { id: 2, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/15401525.jpg?k=434742b6bcea290c9f9562ea47d8070db81dd2483767d084cab41c6fd80d788c&o=&hp=1", alt: "Reception", type: "small" },
        { id: 3, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/17181480.jpg?k=8bfc458b703e4447e12f6470f32356ff04208f9aa902dbecb9cfaf708697d30e&o=&hp=1", alt: "Room 1", type: "small" },
        { id: 4, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/17181561.jpg?k=a07c6455022ddf18bc658d687c656a60cb141d152d883ade925986a30dc0cff3&o=&hp=1", alt: "Room 2", type: "small" },
        { id: 5, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/17181594.jpg?k=05ab79f243f9fd2d99c9fd70fdbeb032dfe7581848c3f148276f5767611262f3&o=&hp=1", alt: "Building", type: "small" },
        { id: 6, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/17181318.jpg?k=f8edac6acb4b93dc5d2c6844db75155ff46f2a980a36b6f8b7a6d365d833c766&o=&hp=1", alt: "More Photos", type: "large" },
        { id: 7, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/139528109.jpg?k=f28daddd35d132898ff46b627e1aa3fa115ed318d09fc3557166f40e0defbde7&o=&hp=1", alt: "Room 2", type: "small" },
        { id: 8, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/139528236.jpg?k=edef5f42f74ca1c32c570c5bef598e5b697229f2da44271a97e42031488e4dbd&o=&hp=1", alt: "Main Image", type: "large" },
      
      ];
      const [isOpen,setIsOpen]=useState(false);
      const [selectedImage, setSelectedImage] = useState(null);
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
      };
      return (
        <>
          <div className="location-head">
          <div className="title-container">
            <h1>Taj Falaknuma Palace</h1>
            <p><FaLocationDot style={{ color: "red" }} />Engine Bowli, Falaknuma , 500053 Hyderabad, India</p></div>
            <button className="reserve-button" onClick={()=>navigate("/bookingform")}>Reserve</button>
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
                  <img src={img.src} alt={img.alt}  onClick={()=>openPopup(img)}  />
                </div>
              ))}
            </div>
            <div className="main-image">
              <img src={images[7].src} alt={images[7].alt}  onClick={()=>openPopup(images[7])}  />
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
            <p>🌟Perched 609 meters above Hyderabad, the Taj Falaknuma Palace offers a regal retreat that seamlessly blends historic grandeur with modern luxury. Originally built in 1894 as the residence of the Nizam of Hyderabad, the palace has been meticulously restored to reflect its opulent past.​</p>
            <p>🌟 Guests can rejuvenate at the Jiva Spa, which offers holistic wellness treatments designed to relax and revitalize. The outdoor swimming pool, set amidst lush royal gardens, provides a serene environment for leisure. For fitness enthusiasts, a well-equipped gym is available.  </p>
            <p>🌟Accommodations: The palace features 60 exquisitely appointed rooms and suites, each designed to provide a unique blend of classic charm and contemporary comfort. Guests can enjoy breathtaking views of the city, with interiors that echo the palace's storied history.</p>
          </div>
        </>
      );
    
}
function Info10()
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
function Facilities10()
{
    return (
        <div className="container">
          <h1>Facilities of Taj Falaknuma Palace</h1>
    
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

function Reviews10()
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
export {Overview10,Info10,Facilities10,Reviews10};
