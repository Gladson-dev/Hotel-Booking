import './Locationplaces.css';
import { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { IoMdHeart } from "react-icons/io";
import { FaWifi, FaUsers, FaConciergeBell, FaDoorOpen, FaBath, FaTv, FaUtensils, FaShieldAlt } from "react-icons/fa";
function Overview7()
{
    const images = [
        { id: 1, src: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/406496014.jpg?k=ca860540f9f5b0daa740ef789bec6d081c5ceb6ac3eaba21a50105b7050054d7&o=&s=1024x", alt: "Main Image", type: "large" },
        { id: 2, src: "https://pix8.agoda.net/geo/poi/1509448/f0930ea5419fb6c9906bff52f0747dda.jpg?ce=0&s=1024x", alt: "Reception", type: "small" },
        { id: 3, src: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/303192014.jpg?k=547da031bc09dce2d9dfec204b4fb2580579977db035c58f909db722c4c9f9dd&o=&s=1024x", alt: "Room 1", type: "small" },
        { id: 4, src: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/303209657.jpg?k=81f84e473acb375fd46e2e317e351165710a43d763175bc84e4f6592874f0cd6&o=&s=1024x", alt: "Room 2", type: "small" },
        { id: 5, src: "https://pix8.agoda.net/property/286245/0/2f930425e52c492d2b548342a338b948.jpeg?s=1024x", alt: "Building", type: "small" },
        { id: 6, src: "https://pix8.agoda.net/property/24110424/333123430/d6a5a12224c46944051ebbd3c2159861.jpeg?ce=0&s=1024x", alt: "More Photos", type: "large" },
        { id: 7, src: "https://pix8.agoda.net/hotelImages/286245/-1/227844c9abc6bfba39d240d653097bd2.jpg?ca=20&ce=1&s=1024x", alt: "Room 2", type: "small" },
        { id: 8, src: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/303211697.jpg?k=2e3ef0f91e5a06f2c5f80c11620ed58da0742ce1bbf5bdb2058fde77c1ac0656&o=&s=1024x", alt: "Main Image", type: "large" },
      
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
            <h1>Green Meadows Resort</h1>
            <p><FaLocationDot style={{ color: "red" }} /> 4/364 A, Anna Salai, Palavakkam, Chennai, Tamil Nadu 600041, India.</p></div>
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
              <img src={images[0].src} alt={images[0].alt}  onClick={()=>openPopup(images[0])}  />
            </div>
            <div className="small-images">
              {images.slice(1, 7).map((img) => (
                <div key={img.id} className="image-box">
                  <img src={img.src} alt={img.alt}  onClick={()=>openPopup(img)}  />
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
            <p>🌟Situated along the picturesque East Coast Road (ECR), the resort is approximately 300 meters from the renowned Palavakkam Beach, offering guests a tranquil environment away from the city's hustle.</p>
            <p>🌟Green Meadows Resort is equipped to host a variety of events, from corporate gatherings to private celebrations.</p>
            <p>🌟Accommodation: The resort features 19 aesthetically designed rooms that blend traditional charm with modern amenities. Guests can choose from various room categories, including Boutique Rooms, Deluxe Rooms, Superior Rooms, and Luxury Heritage Rooms. </p>
          </div>
        </>
      );
    
}
function Info7()
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
function Facilities7()
{
    return (
        <div className="container">
          <h1>Facilities of Green Meadows Resort</h1>
    
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

function Reviews7()
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
export {Overview7,Info7,Facilities7,Reviews7};
