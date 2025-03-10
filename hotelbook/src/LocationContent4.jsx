import './Locationplaces.css';
import { useState ,useEffect} from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate ,useLocation} from 'react-router-dom';
import { IoMdHeart } from "react-icons/io";
import { FaWifi, FaUsers, FaConciergeBell, FaDoorOpen, FaBath, FaTv, FaUtensils, FaShieldAlt } from "react-icons/fa";
const defaultHotel = { 
  review:"⭐⭐⭐",
   name: "Hotel Chanchal Continental",
  location: "New Delhi, India",
  image: "https://pix10.agoda.net/hotelImages/104/10431/10431_14040510160018977622.jpg?s=1024x768",
  rating:"5.8",
  reviews:"620 reviews",
  day:"1 day,2 adults",
  rupees:"₹ 3,845",
  tax:"+₹160 taxes and charges",
  path:"/hotel/HotelChanchalContinental",
}; 
function Overview4({ hotel = defaultHotel })
{
    const images = [
        { id: 1, src: "https://pix10.agoda.net/hotelImages/104/10431/10431_14040510160018977622.jpg?s=1024x768", alt: "Main Image", type: "large" },
        { id: 2, src: "https://i.pinimg.com/474x/cd/2a/0b/cd2a0b9bd2380394617c87621f94b103.jpg", alt: "Reception", type: "small" },
        { id: 3, src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/07/d3/a9/hotel-chanchal-continental.jpg?h=-1&s=1&w=1200", alt: "Room 1", type: "small" },
        { id: 4, src: "https://tse1.mm.bing.net/th?id=OIP.PsSg0JPIlMKV_jrmxIKb6AHaEK&pid=Api&P=0&h=180", alt: "Room 2", type: "small" },
        { id: 5, src: "https://tse4.mm.bing.net/th?id=OIP.hhRRTFNtfLBhWB5v8O4qNgHaE8&pid=Api&P=0&h=180", alt: "Building", type: "small" },
        { id: 6, src: "https://hotel-grand-aerocity.delhitophotel.com/data/Photos/OriginalPhoto/10200/1020066/1020066256/new-delhi-hotel-grand-aerocity-photo-4.JPEG", alt: "More Photos", type: "large" },
        { id: 7, src: "https://hotel-chanchal-continental.delhitophotel.com/data/Pictures/OriginalPhoto/3206/320695/320695205/picture-new-delhi-hotel-chanchal-continental-28.JPEG", alt: "Room 2", type: "small" },
        { id: 8, src: "https://www.thehotelconversation.com.au/sites/default/files/653b1080-36ec-448d-892a-4518c97d80d4.jpeg", alt: "Main Image", type: "large" },
      
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
      const [isFavorite, setIsFavorite] = useState(false); 
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
            <h1>Hotel Chanchal Continental</h1>
            <p><FaLocationDot style={{ color: "red" }} /> 8524 Arakashan Road in the Paharganj area,New Delhi, India.</p></div>
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
            <p>🌟Hotel Chanchal Continental is a 3-star establishment situated in the heart of New Delhi, India.the hotel is a mere 2-minute walk from the New Delhi Railway Station, making it an ideal choice for travelers seeking accessibility and comfort.</p>
            <p>🌟 This centrally located hotel offers 54 well-appointed, air-conditioned rooms designed to cater to both business and leisure travelers. </p>
            <p>🌟Guests can enjoy modern amenities, attentive service, and proximity to several of Delhi's major attractions and commercial hubs.</p>
          </div>
        </>
      );
}
const hotel = {
  review:"⭐⭐⭐",
  name: "Hotel Chanchal Continental",
 location: "New Delhi, India",
 image: "https://pix10.agoda.net/hotelImages/104/10431/10431_14040510160018977622.jpg?s=1024x768",
 rating:"5.8",
 reviews:"620 reviews",
 day:"1 day,2 adults",
 rupees:"₹ 3,845",
 tax:"+₹160 taxes and charges",
 path:"/hotel/HotelChanchalContinental",
};
function Info4()
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
function Facilities4()
{
    return (
        <div className="container">
          <h1>Facilities of Hotel Chanchal Continental</h1>
    
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

function Reviews4()
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
export {Overview4,Info4,Facilities4,Reviews4,hotel};
