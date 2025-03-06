import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const HotelCarousel = ({ setSelectedLocation, updateLocationInput }) => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const hotels = [
    {
      name: "Lemon Tree Hotel White",
      location: "Bengaluru, India",
      rating: 7.8,
      reviews: 47,
      image: "https://cf.bstatic.com/xdata/images/hotel/square240/291459168.jpg?k=6ff0296da46d493533cf06112054e1b93b09c4d3d0ae6f13d9e9605ebfd8c0ad&o=",
      path: "/hotel/LemonTreeHotelWhite",
    },
    {
      name: "Vividus Hotel",
      location: "Bengaluru, India",
      rating: 7.1,
      reviews: 604,
      image: "https://images.pexels.com/photos/189293/pexels-photo-189293.jpeg?auto=compress&cs=tinysrgb&w=600",
      path: "/hotel/Vividus",
    },
    {
      name: "Hotel City Tower",
      location: "Chennai, India",
      rating: 6.3,
      reviews: 32,
      image: "https://images.pexels.com/photos/2670273/pexels-photo-2670273.jpeg?auto=compress&cs=tinysrgb&w=600",
      path: "/hotel/HotelCityTower",
    },
    {
      name: "Hotel Chanchal Continental",
      location: "New Delhi, India",
      rating: 8.2,
      reviews: 471,
      image: "https://images.pexels.com/photos/2363807/pexels-photo-2363807.jpeg?auto=compress&cs=tinysrgb&w=600",
      path: "/hotel/HotelChanchalContinental",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
    }
  };

  const handleImageClick = (location) => {
    updateLocationInput(location); 
  };

  return (
    <div className="carousel-container">
      <button className="nav-button left" onClick={() => scroll("left")}>
        &#9664;
      </button>
      <div className="carousel" ref={scrollRef}>
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="hotel-card"
            onClick={() => {navigate(hotel.path), handleImageClick(hotel.location); }}
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              onClick={(e) => {
                setSelectedLocation(hotel.location);
              }}
              style={{ cursor: "pointer" }}
            />
            <h3>{hotel.name}</h3>
            <p>{hotel.location}</p>
            <span className="ratings">{hotel.rating}</span>
            <p>
              Good. {hotel.reviews} reviews
            </p>
          </div>
        ))}
      </div>
      <button className="nav-button right" onClick={() => scroll("right")}>
        &#9654;
      </button>
    </div>
  );
};

const Excitplace = ({ setSelectedLocation, updateLocationInput }) => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const hotels = [
    {
      name: "Olice Zip Koramangala",
      location: "Bengaluru, India",
      rating: 7.9,
      reviews: 127,
      image: "https://cf.bstatic.com/xdata/images/hotel/square240/545574068.jpg?k=be696306cdb63f5b166a27aabee4f7c4b9db8ad1cea82344b9c1c413824bb6c6&o=",
      rupees: "₹6250",
      changerupees: "₹4550",
      path: "/hotel/OliceZipKoramangala",
    },
    {
      name: "Fab Hotel Royal Stay",
      location: "Bengaluru, India",
      rating: 7.1,
      reviews: 604,
      image: "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=600",
      rupees: "₹8725",
      changerupees: "₹6520",
      path: "/hotel/FabHotelRoyalStay",
    },
    {
      name: "Green Meadows Resort",
      location: "Chennai, India",
      rating: 8.6,
      reviews: 520,
      image: "https://pix8.agoda.net/hotelImages/286245/-1/2181b5c9f917811589d41c0cadc990f2.jpg?ce=0&s=1024x",
      rupees: "₹4550",
      changerupees: "₹3999",
      path: "/hotel/GreenMeadowsResort",
    },
    {
      name: "Raj Park Hotel",
      location: "Chennai, India",
      rating: 6.5,
      reviews: 680,
      image: "https://images.pexels.com/photos/261181/pexels-photo-261181.jpeg?auto=compress&cs=tinysrgb&w=600",
      rupees: "₹7895",
      changerupees: "₹6850",
      path: "/hotel/RajParkHotel",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleImageClick = (location) => {
    updateLocationInput(location); 
  };

  return (
    <div className="carousel-container">
      <button className="nav-button left" onClick={() => scroll("left")}>
        &#9664;
      </button>
      <div className="carousel" ref={scrollRef}>
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="hotel-card"
            onClick={() =>{ navigate(hotel.path), handleImageClick(hotel.location);}}
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              onClick={(e) => {
                setSelectedLocation(hotel.location);
              }}
              style={{ cursor: "pointer" }}
            />
            <h3>{hotel.name}</h3>
            <p>{hotel.location}</p>
            <span className="ratings">{hotel.rating}</span>
            <p>
              Good. {hotel.reviews} reviews
            </p>
            <div className="deals">
              <p style={{ color: "white" }}>Limited offer</p>
            </div>
            <div className="deal">
              <p id="styles">
                2 days
                <span style={{ color: "red" }} id="style">
                  {hotel.rupees}
                </span>
                <span style={{ color: "darkblack" }}>
                  {hotel.changerupees}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="nav-button right" onClick={() => scroll("right")}>
        &#9654;
      </button>
    </div>
  );
};

export { HotelCarousel, Excitplace };