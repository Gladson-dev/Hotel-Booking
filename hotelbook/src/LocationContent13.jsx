import './Locationplaces.css';
import { useState ,useEffect} from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate ,useLocation} from 'react-router-dom';
import { IoMdHeart } from "react-icons/io";
import { FaWifi, FaUsers, FaConciergeBell, FaDoorOpen, FaBath, FaTv, FaUtensils, FaShieldAlt } from "react-icons/fa";
const defaultHotel = { 
  review:"⭐⭐⭐⭐",
   name: "Taj Falaknuma Palace",
  location: "Hyderabad, India",
  image: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_4721,h_3541,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/raj-park-hotel---tirupati/Hotel_Raj_Park_-_Luxury_Hotel_in_Tirupati",
  rating:"7.6",
  reviews:"820 reviews",
  day:"1 day,2 adults",
  rupees:"₹ 3,639",
  tax:"+₹150 taxes and charges",
  path:"/hotel/HotelORSQUAREHOMES",
}; 
function Overview13()
{
    const images = [
        { id: 1, src: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_4721,h_3541,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/raj-park-hotel---tirupati/Hotel_Raj_Park_-_Luxury_Hotel_in_Tirupati", alt: "Main Image", type: "large" },
        { id: 2, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/166533790.jpg?k=5f047c43bfcca6180fbe5afb3d1991deb751c12851074ec0ec81d7fcd4a0c8ed&o=&hp=1", alt: "Reception", type: "small" },
        { id: 3, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/166533747.jpg?k=1c26fde54de60d1347d8576d3062642f3970c2174de82d9d3410557462974d40&o=&hp=1", alt: "Room 1", type: "small" },
        { id: 4, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/166537813.jpg?k=8e9b27ff71b8c41fd778b03d198d44524302c441bec4508dee860adbd3d3a479&o=&hp=1", alt: "Room 2", type: "small" },
        { id: 5, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/166533723.jpg?k=4f8c5d48d15c302384dda764931f085e5bd8de1869b1b359c69029e5ff905f38&o=&hp=1", alt: "Building", type: "small" },
        { id: 6, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/166532777.jpg?k=e7682b5901629dbc05357e62858116fea7adcc1ec8ef4c65016a2f7c5f15bd91&o=&hp=1", alt: "More Photos", type: "large" },
        { id: 7, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/166537809.jpg?k=11240332b15f910188489ee22a9e0084de48bdfaafd7cd2901ef73a8c27827f4&o=&hp=1", alt: "Room 2", type: "small" },
        { id: 8, src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/166533764.jpg?k=da741823c31b58b722521e18a6da8182a02abd3ba81c794e2062f228bec460ba&o=&hp=1", alt: "Main Image", type: "large" },
      
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
            <h1>Raj Park Hotel</h1>
            <p><FaLocationDot style={{ color: "red" }} /> No.180, T.T.K. Road , Alwarpet,, 600018 Chennai, India</p></div>
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
            <p>🌟 Its prime location offers guests convenient access to prominent city attractions, including Marina Beach, Citi Centre, and the US Consulate, which is just 1.5 kilometers away. </p>
            <p>🌟 The hotel is approximately 16.5 kilometers from Chennai International Airport and 6 kilometers from Chennai Central Railway Station. </p>
            <p>🌟Accommodation: Raj Park Hotel Chennai boasts 118 elegantly designed rooms, categorized into Deluxe Rooms, Superior Rooms, and Suites.The hotel's 24-hour check-in and check-out policy ensures flexibility for travelers. </p>
          </div>
        </>
      );
}
const hotel = {
  review:"⭐⭐⭐⭐",
   name: "Taj Falaknuma Palace",
  location: "Hyderabad, India",
  image: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_4721,h_3541,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/raj-park-hotel---tirupati/Hotel_Raj_Park_-_Luxury_Hotel_in_Tirupati",
  rating:"7.6",
  reviews:"820 reviews",
  day:"1 day,2 adults",
  rupees:"₹ 3,639",
  tax:"+₹150 taxes and charges",
  path:"/hotel/HotelORSQUAREHOMES",
};
function Info13()
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
function Facilities13()
{
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

function Reviews13()
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
export {Overview13,Info13,Facilities13,Reviews13,hotel};
