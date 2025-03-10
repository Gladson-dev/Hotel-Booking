import './Locationplaces.css';
import { useState,useEffect } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { TbDesk } from "react-icons/tb";
import { useNavigate ,useLocation} from 'react-router-dom';
import { IoMdHeart } from "react-icons/io";
import { MdOutlineCoffeeMaker ,MdOutlineWineBar } from "react-icons/md";
import { FaWifi,  FaBath, FaTv, FaUtensils, FaShieldAlt } from "react-icons/fa";

const defaultHotel = { 
  review:"⭐⭐⭐",
   name: "Vividus Hotel",
  location: "Bengaluru, India",
  image: "https://tse1.mm.bing.net/th?id=OIP._ZMDjdYaU_dmFFIa26UQ3QHaEK&pid=Api&P=0&h=180",
  rating:"3.6",
  reviews:"100 reviews",
  day:"1 day,2 adults",
  rupees:"₹ 2,000",
  tax:"+₹100 taxes and charges",
  path:"/hotel/Vividus",
};  
function Overview2({ hotel = defaultHotel })
{
    const images = [
        { id: 1, src: hotel.image ||"https://tse1.mm.bing.net/th?id=OIP._ZMDjdYaU_dmFFIa26UQ3QHaEK&pid=Api&P=0&h=180 ", alt: "Main Image", type: "large" },
        { id: 2, src: "https://i.pinimg.com/474x/79/3c/80/793c80dbca50bf409d375973c1506498.jpg", alt: "Reception", type: "small" },
        { id: 3, src: "https://i.pinimg.com/474x/bb/cd/61/bbcd6163fde6f226c22350f28e2471c5.jpg", alt: "Room 1", type: "small" },
        { id: 4, src: "https://tse3.mm.bing.net/th?id=OIP.5TTPPEMuptzNhKujHF7TWwHaFj&pid=Api&P=0&h=180", alt: "Room 2", type: "small" },
        { id: 5, src: "https://tse4.mm.bing.net/th?id=OIP.csBSJXkyXonnKTi8aKPV_gHaEe&pid=Api&P=0&h=180", alt: "Building", type: "small" },
        { id: 6, src: "https://i.pinimg.com/474x/c7/69/dc/c769dcc68b10b8f0ecc271b266198006.jpg", alt: "More Photos", type: "large" },
        { id: 7, src: "https://i.pinimg.com/474x/62/c8/6b/62c86b64fc29880bb5cba9e99eafcde0.jpg", alt: "Room 2", type: "small" },
        { id: 8, src: "https://i.pinimg.com/474x/1d/fa/4d/1dfa4de7ae3423d6569c3ca2873cee22.jpg", alt: "Main Image", type: "large" },
      
      ];
      const [isOpen,setIsOpen]=useState(false);
      const [isFavorite, setIsFavorite] = useState(false); 
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
            <h1>Vividus Hotel</h1>
            <p><FaLocationDot style={{ color: "red" }} /> Gandhi Nagar, Bangalore,2.6 km away from  Bengaluru City Junction Railway Station, 2.8 km away from Majestic Bus Terminus, India</p>
            </div>
            <button className="reserve-button"onClick={handleReserveClick}>Reserve</button>
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
              <img src={images[7].src} alt={images[7].alt}   onClick={()=>openPopup(images[7])}  />
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
            <p>🌟Vividus Hotel is conveniently located close to several popular destinations in Bengaluru, including MG Road, UB City, Bangalore Palace, and Cubbon Park.</p>
            <p>🌟Vividus Hotel offers spa and wellness services, ensuring that guests can unwind and relax during their stay,The hotel may also have a fitness center or gym for guests who want to maintain their fitness routine during their travels.</p>
            <p>🌟Accomadation:The hotel offers well-appointed rooms and suites, designed to provide a comfortable and relaxing stay. Rooms are equipped with modern amenities such as high-speed internet, flat-screen TVs, mini-bars, and luxurious bedding</p>
            <p>🌟Rooms come with different categories, including Superior Rooms, Deluxe Rooms, and Executive Suites, catering to different preferences and budgets.</p>
          </div>
        </>
      );
    
}
const hotel = {
  review:"⭐⭐⭐",
  name: "Vividus Hotel",
 location: "Bengaluru, India",
 image: "https://tse1.mm.bing.net/th?id=OIP._ZMDjdYaU_dmFFIa26UQ3QHaEK&pid=Api&P=0&h=180",
 rating:"3.6",
 reviews:"100 reviews",
 day:"1 day,2 adults",
 rupees:"₹ 2,000",
 tax:"+₹100 taxes and charges",
 path:"/hotel/Vividus",
};
function Info2()
{
  const hotelRooms = [
    { guests: "4 Persons", price: 1834, taxes: 245, discount: "20% off", availability: "Available" },
    { guests: "3 Persons", price: 1567, taxes: 200, discount: "15% off", availability: "Available" },
    { guests: "2 Persons", price: 1300, taxes: 180, discount: "15% off", availability: "Available" },
    { guests: "1 Person", price: 1050, taxes: 120, discount: "10% off", availability: "Available" },
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
function Facilities2()
{
    return (
        <div className="container">
          <h1>Facilities of Vividus Hotel</h1>
    
          <div className="popular-facilities">
            <h2>Most Popular Facilities</h2>
            <div className="icons">
              <span><FaWifi /> High-speed Wi-Fi</span>
              <span><MdOutlineCoffeeMaker />Tea/Coffee maker</span>
              <span><TbDesk /> Work desk and comfortable seating</span>
              <span><MdOutlineWineBar /> Mini bar</span>
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
              <h3><FaUtensils /> Dining & Culinary Services</h3>
              <ul>
                <li>Multi-cuisine Restaurant</li>
                <li>Cafe</li>
                <li>Bar</li>
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

function Reviews2()
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
export {Overview2,Info2,Facilities2,Reviews2,hotel};
