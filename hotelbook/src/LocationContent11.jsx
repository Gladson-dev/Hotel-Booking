import './Locationplaces.css';
import { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { IoMdHeart } from "react-icons/io";
import { FaWifi, FaUsers, FaConciergeBell, FaDoorOpen, FaBath, FaTv, FaUtensils, FaShieldAlt } from "react-icons/fa";
function Overview11()
{
    const images = [
        { id: 1, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/566404228.jpg?k=87f62def4abf733fa6d2246e2cd61d86e4c75a10bb2219c4e1e097a4e853fe56&o=&hp=1", alt: "Main Image", type: "large" },
        { id: 2, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/591713132.jpg?k=1921ee021a0eceb15e611bdd0d7a8418bdcd7d9cc90479a27388e111ea54b3cd&o=&hp=1", alt: "Reception", type: "small" },
        { id: 3, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/591713171.jpg?k=7e04b60c83eea72cd49e2210938ecf072d19206b89494d960ae94436c62905ec&o=&hp=1", alt: "Room 1", type: "small" },
        { id: 4, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/591713248.jpg?k=031f140382fd35dd85bbf92d84308d97598a1772c4693c25a7f98782ea7d11a7&o=&hp=1", alt: "Room 2", type: "small" },
        { id: 5, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/591713070.jpg?k=c2f16d42064d576e4ca2fa08db07b3b2c8459cb91ad14321cfa55b2ce80c7ee9&o=&hp=1", alt: "Building", type: "small" },
        { id: 6, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/591713076.jpg?k=9bcb5b29751320a70844ef9874d23ba40dd1759c314619736a467ba9229d42e1&o=&hp=1", alt: "More Photos", type: "large" },
        { id: 7, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/591713115.jpg?k=7a0bbc0effd2b9f74717ce2ee744c98336da6d322108b6227ae729a5ee9a5560&o=&hp=1", alt: "Room 2", type: "small" },
        { id: 8, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/591713251.jpg?k=df2ca1a2efd7f34df3d9ecbbca1bf268e215ff2d0a03f49f14e417ece096c0cf&o=&hp=1", alt: "Main Image", type: "large" },
      
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
            <h1>Hyatt Ronil Goa </h1>
            <p><FaLocationDot style={{ color: "red" }} />Calangute - Baga Road,, 403516 Calangute, India</p></div>
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
            <p>🌟Hyatt Ronil Goa, part of the JdV by Hyatt collection, is a 5-star hotel located in Baga, North Goa, just a short walk from the famous Baga Beach. </p>
            <p>🌟Two outdoor pools, open until 1 AM, with a swim-up bar for added convenience,Savor authentic flavors with their wood-fired oven pizzas.​ </p>
            <p>🌟Accommodations: The hotel offers 135 well-appointed rooms, each featuring a private balcony. Guests can enjoy amenities such as a complimentary minibar stocked with local beer and snacks, a French press, an electric kettle, and signature cedar sandalwood bath products. ​ </p>
          </div>
        </>
      );
    
}
function Info11()
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
function Facilities11()
{
    return (
        <div className="container">
          <h1>Facilities of Hyatt Ronil Goa</h1>
    
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

function Reviews11()
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
export {Overview11,Info11,Facilities11,Reviews11};
