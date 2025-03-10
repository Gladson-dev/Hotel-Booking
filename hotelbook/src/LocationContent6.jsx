import './Locationplaces.css';
import { useState ,useEffect} from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate,useLocation } from 'react-router-dom';
import { IoMdHeart } from "react-icons/io";
import { FaWifi, FaUsers, FaConciergeBell, FaDoorOpen, FaBath, FaTv, FaUtensils, FaShieldAlt } from "react-icons/fa";
const defaultHotel = { 
  review:"⭐⭐⭐",
   name: "Fab Hotel Royal Stay",
  location: "Bengaluru, India",
  image: "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_mobileactualimage/v0006118512/Hotel/00188201/1_Facade_q_E3cTrv.jpg",
  rating:"4.3",
  reviews:"720 reviews",
  day:"1 day,2 adults",
  rupees:"₹ 2,565",
  tax:"+₹160 taxes and charges",
  path:"/hotel/FabHotelRoyalStay",
}; 
function Overview6({ hotel = defaultHotel })
{
    const images = [
        { id: 1, src: "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_mobileactualimage/v0006118512/Hotel/00188201/1_Facade_q_E3cTrv.jpg", alt: "Main Image", type: "large" },
        { id: 2, src: "https://cf.bstatic.com/xdata/images/hotel/max500/264072638.jpg?k=e6c05b68c1713eb9fead3cf496aae02c79feb49e7f4df6605c762039b3328b32&o=", alt: "Reception", type: "small" },
        { id: 3, src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/264072600.jpg?k=73c5af5aad9e519a69b679d4008d7ccaf93de2d25365ca0fb04f00394c8f2e56&o=&hp=1", alt: "Room 1", type: "small" },
        { id: 4, src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/264072553.jpg?k=7cca45692d91646e4669420327ccb74d05139aeb28aec7a575eec5da098f7c90&o=&hp=1", alt: "Room 2", type: "small" },
        { id: 5, src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/264072557.jpg?k=f62a9f56cbfbcf8650a2cd2432502fc2c8e187a659b0d6be99b7465b0e748e67&o=&hp=1", alt: "Building", type: "small" },
        { id: 6, src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/264072510.jpg?k=e26b8fb44883c18026bf4d5177c224402dfa3ebf25d4bc49f7af88ef5652ab13&o=&hp=1", alt: "More Photos", type: "large" },
        { id: 7, src: "https://hotelroyalstay.org/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-20-at-8.18.07-PM.jpeg", alt: "Room 2", type: "small" },
        { id: 8, src: "https://pimg.fabhotels.com/propertyimages/359/images/photos-fabhotel-royal-boutique-goa-Hotels_1570799152726.jpg", alt: "Main Image", type: "large" },
      
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
            <h1>Fab Hotel Royal Stay</h1>
            <p><FaLocationDot style={{ color: "red" }} />A-97, Dayananda Colony Rd, Block A, Dayanand Colony, Bengaluru</p></div>
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
              <img src={images[7].src} alt={images[7].alt}   onClick={()=>openPopup(images[7])} />
            </div>
          </div>
          {isOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage?.src} alt={selectedImage?.alt} className="popup-image"  />
          </div>
        </div>
      )}
    
          <div className="hotel-description">
            <p>🌟FabHotel Royal Stay is designed to provide comfortable and affordable lodging for both business and leisure travelers. With a focus on delivering a pleasant stay, this hotel offers well-maintained rooms, friendly service, and essential amenities to ensure a stress-free experience. </p>
            <p>🌟Typically located in a central area, close to transport hubs, restaurants, shopping areas, and business districts, ensuring that guests can easily access key spots in the city.</p>
            <p>🌟Accommodations: The hotel features clean and well-furnished rooms with essential facilities such as air conditioning, comfortable beds, and modern décor. Rooms may come with en-suite bathrooms equipped with showers, free toiletries, and fresh towels.</p>
          </div>
        </>
      );
    
}
const hotel = {
  review:"⭐⭐⭐",
  name: "Fab Hotel Royal Stay",
 location: "Bengaluru, India",
 image: "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_mobileactualimage/v0006118512/Hotel/00188201/1_Facade_q_E3cTrv.jpg",
 rating:"4.3",
 reviews:"720 reviews",
 day:"1 day,2 adults",
 rupees:"₹ 2,565",
 tax:"+₹160 taxes and charges",
 path:"/hotel/FabHotelRoyalStay",
};
function Info6()
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
function Facilities6()
{
    return (
        <div className="container">
          <h1>Facilities of Fab Hotel Royal Stay</h1>
    
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

function Reviews6()
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
export {Overview6,Info6,Facilities6,Reviews6,hotel};
