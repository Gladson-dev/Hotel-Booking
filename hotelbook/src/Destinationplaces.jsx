import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Destinationplace.css";
import './index.css';
import { FaSearch } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import LocationSelector from "./Location";
import CalendarButton from "./CalendarButton";
import RoomSelector from "./Travellers";
function DesPlace1() {
    const hotels = [
      {
        name: "Hotel Chanchal Continental",
        location: "Paharganj area, New Delhi",
        distance: "2.3 km from centre",
        beachDistance: "3 km from beach",
        roomType: "Deluxe Double or Twin Room",
        beds: "1 double or 2 singles",
        cancellation: "Free cancellation",
        price: "₹5,859",
        oldPrice: "₹6,300",
        taxes: "+ ₹703 taxes and charges",
        available: "Check Availability",
        image:
          "https://pix10.agoda.net/hotelImages/104/10431/10431_14040510160018977622.jpg?s=1024x768",
        path: "/hotel/HotelChanchalContinental",
      },
    ];

    const navigate = useNavigate();
    const [favorites, setFavorites] = useState(Array(hotels.length).fill(false));

    const toggleFavorite = (index) => {
      const newFavorites = [...favorites];
      newFavorites[index] = !newFavorites[index];
      setFavorites(newFavorites);
    };
      const [selectedlocation, setSelectedlocation] = useState(null);
      const [locationInputValue, setLocationInputValue] = useState("New Delhi");
    
      const handleSearchClick = () => {
        if (selectedlocation && selectedlocation.path) {
          navigate(selectedlocation.path);
        } else {
          alert("Please select a valid location !");
        }
      };

    return (
      <>
      <div className="check">
      <LocationSelector setSelectedlocation={setSelectedlocation} updateSearchValue={locationInputValue} />
      <CalendarButton />
      <RoomSelector />
      <button
        id="search"
        style={{ backgroundColor: "blue", marginRight: "48px", borderRadius: "5px" }}
        onClick={handleSearchClick}
      >
        <FaSearch width="20px" height="20px" style={{ marginRight: "18px", color: "black" }} />
        <span style={{ color: "red", alignItems: "center" }}>search</span>
      </button>
    </div>
      <div className="hotel-list">
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-cards">
          <div className="image-container">
              <img src={hotel.image} alt={hotel.name} className="hotel-image" />
            </div>
            <div className="hotel-details">
              <h2>{hotel.name}</h2>
              <p className="location">{hotel.location}</p>
              <p className="distance">{hotel.distance}</p>
              {hotel.beachDistance && (
                <p className="beach-distance">🏖️ {hotel.beachDistance}</p>
              )}
              <p className="room">
                {hotel.roomType} - {hotel.beds}
              </p>
              <p className="cancellation">{hotel.cancellation}</p>
              <div className="pricing">
                <div>
                  <span className="price">{hotel.price}</span>
                  <span className="old-prices">{hotel.oldPrice}</span>
                  <p className="taxes">{hotel.taxes}</p>
                </div>
                <button className="available" onClick={() => navigate(hotel.path)}>
                  {hotel.available}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </>
    );
  }

function DesPlace2()
{
    
  const hotels = [
    {
      name: "Lemon Tree Hotel White",
      location: "Whitefield,Bengaluru",
      distance: "2.3 km from centre",
      beachDistance: "3 km from beach",
      roomType: "Deluxe Double or Twin Room",
      beds: "1 double or 2 singles",
      cancellation: "Free cancellation",
      price: "₹5,859",
      oldPrice: "₹6,300",
      taxes: "+ ₹703 taxes and charges",
      available: "Check Availability",
      image: "https://i.pinimg.com/474x/3f/a2/6c/3fa26c3564eafc83ba09864b402f2c1a.jpg",
      path:"/hotel/LemonTreeHotelWhite"
    },
    {
      name: "Vividus Hotel",
      location: "Gandhi Nagar, Bangalore",
      distance: "2.3 km from centre",
      beachDistance: "3 km from beach",
      roomType: "Deluxe Double or Twin Room",
      beds: "1 double or 2 singles",
      cancellation: "Free cancellation",
      price: "₹5,859",
      oldPrice: "₹6,300",
      taxes: "+ ₹703 taxes and charges",
      available: "Check Availability",
      image: "https://tse1.mm.bing.net/th?id=OIP._ZMDjdYaU_dmFFIa26UQ3QHaEK&pid=Api&P=0&h=180",
      path:"/hotel/Vividus"
    },
    {
      name: "Olice Zip Koramangala",
      location: " Koramangala, Bangalore",
      distance: "2.3 km from centre",
      beachDistance: "3 km from beach",
      roomType: "Deluxe Double or Twin Room",
      beds: "1 double or 2 singles",
      cancellation: "Free cancellation",
      price: "₹5,859",
      oldPrice: "₹6,300",
      taxes: "+ ₹703 taxes and charges",
      available: "Check Availability",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/545574068.jpg?k=be696306cdb63f5b166a27aabee4f7c4b9db8ad1cea82344b9c1c413824bb6c6&o=&hp=1",
      path:"/hotel/OliceZipKoramangala"
    },
    
    {
      name: "Fab Hotel Royal Stay",
      location: "Dayanand Colony, Bengaluru",
      distance: "2.3 km from centre",
      beachDistance: "3 km from beach",
      roomType: "Deluxe Double or Twin Room",
      beds: "1 double or 2 singles",
      cancellation: "Free cancellation",
      price: "₹5,859",
      oldPrice: "₹6,300",
      taxes: "+ ₹703 taxes and charges",
      available: "Check Availability",
      image: "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_mobileactualimage/v0006118512/Hotel/00188201/1_Facade_q_E3cTrv.jpg",
      path:"/hotel/FabHotelRoyalStay"
    },
  ];
  const [favorites, setFavorites] = useState(Array(hotels.length).fill(false));

  const toggleFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };
    const navigate=useNavigate();
    const [selectedlocation, setSelectedlocation] = useState(null);
    const [locationInputValue, setLocationInputValue] = useState("Bengaluru");
  
    const handleSearchClick = () => {
      if (selectedlocation && selectedlocation.path) {
        navigate(selectedlocation.path);
      } else {
        alert("Please select a valid location !");
      }
    };
   
    return(
        <>
        <div className="check">
      <LocationSelector setSelectedlocation={setSelectedlocation} updateSearchValue={locationInputValue} />
      <CalendarButton />
      <RoomSelector />
      <button
        id="search"
        style={{ backgroundColor: "blue", marginRight: "48px", borderRadius: "5px" }}
        onClick={handleSearchClick}
      >
        <FaSearch width="20px" height="20px" style={{ marginRight: "18px", color: "black" }} />
        <span style={{ color: "red", alignItems: "center" }}>search</span>
      </button>
    </div>
       <div className="hotel-list">
      {hotels.map((hotel, index) => ( 
        <div key={index} className="hotel-cards">
          <div className="image-container">
          <img src={hotel.image} alt={hotel.name} className="hotel-image" />
          <IoMdHeart
                 color={favorites[index] ? "red" : "white"}
                 size={20}
                 className="heart-icon"
                 onClick={() => toggleFavorite(index)}
                 />
          </div>
          <div className="hotel-details">
            <h2>{hotel.name}</h2>
            <p className="location">{hotel.location}</p>
            <p className="distance">{hotel.distance}</p>
            {hotel.beachDistance && <p className="beach-distance">🏖️ {hotel.beachDistance}</p>}
            <p className="room">{hotel.roomType} - {hotel.beds}</p>
            <p className="cancellation">{hotel.cancellation}</p>
            <div className="pricing">
              <div>
                <span className="price">{hotel.price}</span>
                <span className="old-prices">{hotel.oldPrice}</span>
                <p className="taxes">{hotel.taxes}</p>
              </div>
              <button className="available" onClick={() => navigate(hotel.path)}>
                {hotel.available}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
        </>
    );
}
function DesPlace3()
{
  const hotels = [
    {
      name: "The St. Regis Mumbai",
      location: "Worli, 400013 Mumbai",
      distance: "2.3 km from centre",
      beachDistance: "3 km from beach",
      roomType: "Deluxe Double or Twin Room",
      beds: "1 double or 2 singles",
      cancellation: "Free cancellation",
      price: "₹5,859",
      oldPrice: "₹6,300",
      taxes: "+ ₹703 taxes and charges",
      available: "Check Availability",
      image: "https://www.dreamzkraft.com/admin/venueThumbnailImage/5d9f1b22949a3__st-regis.jpg",
      path:"/hotel/TheSt.RegisMumbai"
    },
  ];
    const navigate=useNavigate();
    const [favorites, setFavorites] = useState(Array(hotels.length).fill(false));

    const toggleFavorite = (index) => {
      const newFavorites = [...favorites];
      newFavorites[index] = !newFavorites[index];
      setFavorites(newFavorites);
    };
    const [selectedlocation, setSelectedlocation] = useState(null);
    const [locationInputValue, setLocationInputValue] = useState("Mumbai");
    const handleSearchClick = () => {
      if (selectedlocation && selectedlocation.path) {
        navigate(selectedlocation.path);
      } else {
        alert("Please select a valid location !");
      }
    };
   
    return(
        <>
        <div className="check">
      <LocationSelector setSelectedlocation={setSelectedlocation} updateSearchValue={locationInputValue} />
      <CalendarButton />
      <RoomSelector />
      <button
        id="search"
        style={{ backgroundColor: "blue", marginRight: "48px", borderRadius: "5px" }}
        onClick={handleSearchClick}
      >
        <FaSearch width="20px" height="20px" style={{ marginRight: "18px", color: "black" }} />
        <span style={{ color: "red", alignItems: "center" }}>search</span>
      </button>
    </div>
       <div className="hotel-list">
      {hotels.map((hotel, index) => ( 
        <div key={index} className="hotel-cards">
          <div className="image-container">
          <img src={hotel.image} alt={hotel.name} className="hotel-image" />
          <IoMdHeart
                 color={favorites[index] ? "red" : "white"}
                 size={20}
                 className="heart-icon"
                 onClick={() => toggleFavorite(index)}
                 />
          </div>
          <div className="hotel-details">
            <h2>{hotel.name}</h2>
            <p className="location">{hotel.location}</p>
            <p className="distance">{hotel.distance}</p>
            {hotel.beachDistance && <p className="beach-distance">🏖️ {hotel.beachDistance}</p>}
            <p className="room">{hotel.roomType} - {hotel.beds}</p>
            <p className="cancellation">{hotel.cancellation}</p>
            <div className="pricing">
              <div>
                <span className="price">{hotel.price}</span>
                <span className="old-prices">{hotel.oldPrice}</span>
                <p className="taxes">{hotel.taxes}</p>
              </div>
              <button className="available" onClick={() => navigate(hotel.path)}>
                {hotel.available}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
        </>
    );
}
function DesPlace4()
{
  const hotels = [
    {
      name: "Raj Park Hotel",
      location: "Central Chennai, Chennai",
      distance: "2.3 km from centre",
      beachDistance: "3 km from beach",
      roomType: "Deluxe Double or Twin Room",
      beds: "1 double or 2 singles",
      cancellation: "Free cancellation",
      price: "₹5,859",
      oldPrice: "₹6,300",
      taxes: "+ ₹703 taxes and charges",
      available: "Check Availability",
      image: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_4721,h_3541,r_0,c_crop,q_80,fl_progressive/w_825,f_auto,c_fit/raj-park-hotel---tirupati/Hotel_Raj_Park_-_Luxury_Hotel_in_Tirupati",
      path:"/hotel/RajParkHotel"
    },
    {
      name: "Hotel City Tower",
      location: "Chennai City Center, Chennai",
      distance: "12.1 km from centre",
      roomType: "Deluxe Room",
      beds: "1 double bed",
      cancellation: "Free cancellation & No prepayment needed",
      price: "₹2,024",
      oldPrice: "₹4,216",
      taxes: "+ ₹243 taxes and charges",
      available: "Check Availability",
      image: "https://pix8.agoda.net/hotelImages/412529/0/9f19f91bfa2f00d47d06561f00ff3774.jpeg?s=1024x",
       path:"/hotel/HotelCityTower"
    },
    {
        name: "Green Meadows Resort",
        location: "Anna Salai, Palavakkam, Chennai",
        distance: "12.1 km from centre",
        roomType: "Deluxe Room",
        beds: "2 double bed",
        cancellation: "Free cancellation & No prepayment needed",
        price: "₹2,024",
        oldPrice: "₹4,216",
        taxes: "+ ₹243 taxes and charges",
        available: "Check Availability",
        image: "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/406496014.jpg?k=ca860540f9f5b0daa740ef789bec6d081c5ceb6ac3eaba21a50105b7050054d7&o=&s=1024x",
         path:"/hotel/GreenMeadowsResort"
      },
  ];
    const navigate=useNavigate();
    const [favorites, setFavorites] = useState(Array(hotels.length).fill(false));

    const toggleFavorite = (index) => {
      const newFavorites = [...favorites];
      newFavorites[index] = !newFavorites[index];
      setFavorites(newFavorites);
    };
    const [selectedlocation, setSelectedlocation] = useState(null);
    const [locationInputValue, setLocationInputValue] = useState("Chennai");
    const handleSearchClick = () => {
      if (selectedlocation && selectedlocation.path) {
        navigate(selectedlocation.path);
      } else {
        alert("Please select a valid location !");
      }
    };
   
    return(
        <>
        <div className="check">
      <LocationSelector setSelectedlocation={setSelectedlocation} updateSearchValue={locationInputValue} />
      <CalendarButton />
      <RoomSelector />
      <button
        id="search"
        style={{ backgroundColor: "blue", marginRight: "48px", borderRadius: "5px" }}
        onClick={handleSearchClick}
      >
        <FaSearch width="20px" height="20px" style={{ marginRight: "18px", color: "black" }} />
        <span style={{ color: "red", alignItems: "center" }}>search</span>
      </button>
    </div>
       <div className="hotel-list">
      {hotels.slice(0, 3).map((hotel, index) => ( 
        <div key={index} className="hotel-cards">
         <div className="image-container">
          <img src={hotel.image} alt={hotel.name} className="hotel-image" />
          <IoMdHeart
                 color={favorites[index] ? "red" : "white"}
                 size={20}
                 className="heart-icon"
                 onClick={() => toggleFavorite(index)}
                 />
          </div>
          <div className="hotel-details">
            <h2>{hotel.name}</h2>
            <p className="location">{hotel.location}</p>
            <p className="distance">{hotel.distance}</p>
            {hotel.beachDistance && <p className="beach-distance">🏖️ {hotel.beachDistance}</p>}
            <p className="room">{hotel.roomType} - {hotel.beds}</p>
            <p className="cancellation">{hotel.cancellation}</p>
            <div className="pricing">
              <div>
                <span className="price">{hotel.price}</span>
                <span className="old-prices">{hotel.oldPrice}</span>
                <p className="taxes">{hotel.taxes}</p>
              </div>
              <button className="available" onClick={() => navigate(hotel.path)}>
                {hotel.available}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
        </>
    );
}
function DesPlace5()
{
  const hotels = [
    {
      name: "Taj Falaknuma Palace",
      location: " Falaknuma , 500053 Hyderabad, India",
      distance: "2.3 km from centre",
      beachDistance: "3 km from beach",
      roomType: "Deluxe Double or Twin Room",
      beds: "1 double or 2 singles",
      cancellation: "Free cancellation",
      price: "₹5,859",
      oldPrice: "₹6,300",
      taxes: "+ ₹703 taxes and charges",
      available: "Check Availability",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/139528236.jpg?k=edef5f42f74ca1c32c570c5bef598e5b697229f2da44271a97e42031488e4dbd&o=&hp=1",
      path:"/hotel/TajFalaknumaPalace"
    },
  ];
    const navigate=useNavigate();
    const [favorites, setFavorites] = useState(Array(hotels.length).fill(false));

    const toggleFavorite = (index) => {
      const newFavorites = [...favorites];
      newFavorites[index] = !newFavorites[index];
      setFavorites(newFavorites);
    };
    const [selectedlocation, setSelectedlocation] = useState(null);
    const [locationInputValue, setLocationInputValue] = useState("Hyderabad");
    const handleSearchClick = () => {
      if (selectedlocation && selectedlocation.path) {
        navigate(selectedlocation.path);
      } else {
        alert("Please select a valid location !");
      }
    };
    return(
        <>
        <div className="check">
      <LocationSelector setSelectedlocation={setSelectedlocation} updateSearchValue={locationInputValue} />
      <CalendarButton />
      <RoomSelector />
      <button
        id="search"
        style={{ backgroundColor: "blue", marginRight: "48px", borderRadius: "5px" }}
        onClick={handleSearchClick}
      >
        <FaSearch width="20px" height="20px" style={{ marginRight: "18px", color: "black" }} />
        <span style={{ color: "red", alignItems: "center" }}>search</span>
      </button>
    </div>
       <div className="hotel-list">
      {hotels.map((hotel, index) => ( 
        <div key={index} className="hotel-cards">
           <div className="image-container">
          <img src={hotel.image} alt={hotel.name} className="hotel-image" />
          <IoMdHeart
                 color={favorites[index] ? "red" : "white"}
                 size={20}
                 className="heart-icon"
                 onClick={() => toggleFavorite(index)}
                 />
          </div>
          <div className="hotel-details">
            <h2>{hotel.name}</h2>
            <p className="location">{hotel.location}</p>
            <p className="distance">{hotel.distance}</p>
            {hotel.beachDistance && <p className="beach-distance">🏖️ {hotel.beachDistance}</p>}
            <p className="room">{hotel.roomType} - {hotel.beds}</p>
            <p className="cancellation">{hotel.cancellation}</p>
            <div className="pricing">
              <div>
                <span className="price">{hotel.price}</span>
                <span className="old-prices">{hotel.oldPrice}</span>
                <p className="taxes">{hotel.taxes}</p>
              </div>
              <button className="available" onClick={() => navigate(hotel.path)}>
                {hotel.available}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
        </>
    );
}
function DesPlace6()
{
  const hotels = [
    {
      name: "Hyatt Ronil Goa",
      location: " Calangute - Baga Road,, 403516 Calangute, India",
      distance: "2.3 km from centre",
      beachDistance: "3 km from beach",
      roomType: "Deluxe Double or Twin Room",
      beds: "1 double or 2 singles",
      cancellation: "Free cancellation",
      price: "₹5,859",
      oldPrice: "₹6,300",
      taxes: "+ ₹703 taxes and charges",
      available: "Check Availability",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/566404228.jpg?k=87f62def4abf733fa6d2246e2cd61d86e4c75a10bb2219c4e1e097a4e853fe56&o=&hp=1",
      path:"/hotel/HyattRonilGoa"
    },
  ];
    const navigate=useNavigate();
    const [favorites, setFavorites] = useState(Array(hotels.length).fill(false));

    const toggleFavorite = (index) => {
      const newFavorites = [...favorites];
      newFavorites[index] = !newFavorites[index];
      setFavorites(newFavorites);
    };
    const [selectedlocation, setSelectedlocation] = useState(null);
    const [locationInputValue, setLocationInputValue] = useState("Goa");
    const handleSearchClick = () => {
      if (selectedlocation && selectedlocation.path) {
        navigate(selectedlocation.path);
      } else {
        alert("Please select a valid location !");
      }
    };
   
    return(
        <>
        <div className="check">
      <LocationSelector setSelectedlocation={setSelectedlocation} updateSearchValue={locationInputValue} />
      <CalendarButton />
      <RoomSelector />
      <button
        id="search"
        style={{ backgroundColor: "blue", marginRight: "48px", borderRadius: "5px" }}
        onClick={handleSearchClick}
      >
        <FaSearch width="20px" height="20px" style={{ marginRight: "18px", color: "black" }} />
        <span style={{ color: "red", alignItems: "center" }}>search</span>
      </button>
    </div>
       <div className="hotel-list">
      {hotels.map((hotel, index) => ( 
        <div key={index} className="hotel-cards">
            <div className="image-container">
          <img src={hotel.image} alt={hotel.name} className="hotel-image" />
          <IoMdHeart
                 color={favorites[index] ? "red" : "white"}
                 size={20}
                 className="heart-icon"
                 onClick={() => toggleFavorite(index)}
                 />
          </div>
          <div className="hotel-details">
            <h2>{hotel.name}</h2>
            <p className="location">{hotel.location}</p>
            <p className="distance">{hotel.distance}</p>
            {hotel.beachDistance && <p className="beach-distance">🏖️ {hotel.beachDistance}</p>}
            <p className="room">{hotel.roomType} - {hotel.beds}</p>
            <p className="cancellation">{hotel.cancellation}</p>
            <div className="pricing">
              <div>
                <span className="price">{hotel.price}</span>
                <span className="old-prices">{hotel.oldPrice}</span>
                <p className="taxes">{hotel.taxes}</p>
              </div>
              <button className="available" onClick={() => navigate(hotel.path)}>
                {hotel.available}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
        </>
    );
}
function DesPlace7()
{
  const hotels = [
    {
      name: "Howard Johnson by Wyndham",
      location: " Calangute - Baga Road,, 403516 Calangute, India",
      distance: "2.3 km from centre",
      beachDistance: "3 km from beach",
      roomType: "Deluxe Double or Twin Room",
      beds: "1 double or 2 singles",
      cancellation: "Free cancellation",
      price: "₹5,859",
      oldPrice: "₹6,300",
      taxes: "+ ₹703 taxes and charges",
      available: "Check Availability",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/113553406.jpg?k=2f3fb086f43fcdd9ed4e13830279840b84b7daaf972ed84e0932e348f874ee79&o=&hp=1",
      path:"/hotel/HowardJohnsonbyWyndham"
    },
  ];
    const navigate=useNavigate();
    const [favorites, setFavorites] = useState(Array(hotels.length).fill(false));

    const toggleFavorite = (index) => {
      const newFavorites = [...favorites];
      newFavorites[index] = !newFavorites[index];
      setFavorites(newFavorites);
    };
    const [selectedlocation, setSelectedlocation] = useState(null);
    const [locationInputValue, setLocationInputValue] = useState("Kolkata");
    const handleSearchClick = () => {
      if (selectedlocation && selectedlocation.path) {
        navigate(selectedlocation.path);
      } else {
        alert("Please select a valid location !");
      }
    };
   
    return(
        <>
        <div className="check">
      <LocationSelector setSelectedlocation={setSelectedlocation} updateSearchValue={locationInputValue} />
      <CalendarButton />
      <RoomSelector />
      <button
        id="search"
        style={{ backgroundColor: "blue", marginRight: "48px", borderRadius: "5px" }}
        onClick={handleSearchClick}
      >
        <FaSearch width="20px" height="20px" style={{ marginRight: "18px", color: "black" }} />
        <span style={{ color: "red", alignItems: "center" }}>search</span>
      </button>
    </div>
       <div className="hotel-list">
      {hotels.map((hotel, index) => ( 
        <div key={index} className="hotel-cards">
            <div className="image-container">
          <img src={hotel.image} alt={hotel.name} className="hotel-image" />
          <IoMdHeart
                 color={favorites[index] ? "red" : "white"}
                 size={20}
                 className="heart-icon"
                 onClick={() => toggleFavorite(index)}
                 />
          </div>
          <div className="hotel-details">
            <h2>{hotel.name}</h2>
            <p className="location">{hotel.location}</p>
            <p className="distance">{hotel.distance}</p>
            {hotel.beachDistance && <p className="beach-distance">🏖️ {hotel.beachDistance}</p>}
            <p className="room">{hotel.roomType} - {hotel.beds}</p>
            <p className="cancellation">{hotel.cancellation}</p>
            <div className="pricing">
              <div>
                <span className="price">{hotel.price}</span>
                <span className="old-prices">{hotel.oldPrice}</span>
                <p className="taxes">{hotel.taxes}</p>
              </div>
              <button className="available" onClick={() => navigate(hotel.path)}>
                {hotel.available}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
        </>
    );
}
function DesPlace8()
{
    
  const hotels = [
    {
      name: "Hotel O R SQUARE HOMES",
      location: " Calangute - Baga Road, 403516 Calangute, India",
      distance: "2.3 km from centre",
      beachDistance: "3 km from beach",
      roomType: "Deluxe Double or Twin Room",
      beds: "1 double or 2 singles",
      cancellation: "Free cancellation",
      price: "₹5,859",
      oldPrice: "₹6,300",
      taxes: "+ ₹703 taxes and charges",
      available: "Check Availability",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/532736202.jpg?k=0b29e46da6992251ace05bc20010d0ced5672f6bced208fc5aaf4939d258a6cd&o=&hp=1",
      path:"/hotel/HotelORSQUAREHOMES"
    },
  ];
    const navigate=useNavigate();
    const [favorites, setFavorites] = useState(Array(hotels.length).fill(false));

    const toggleFavorite = (index) => {
      const newFavorites = [...favorites];
      newFavorites[index] = !newFavorites[index];
      setFavorites(newFavorites);
    };   const [selectedlocation, setSelectedlocation] = useState(null);
    const [locationInputValue, setLocationInputValue] = useState("Himachal Pradesh");
    const handleSearchClick = () => {
      if (selectedlocation && selectedlocation.path) {
        navigate(selectedlocation.path);
      } else {
        alert("Please select a valid location !");
      }
    };
   
    return(
        <>
        <div className="check">
      <LocationSelector setSelectedlocation={setSelectedlocation} updateSearchValue={locationInputValue} />
      <CalendarButton />
      <RoomSelector />
      <button
        id="search"
        style={{ backgroundColor: "blue", marginRight: "48px", borderRadius: "5px" }}
        onClick={handleSearchClick}
      >
        <FaSearch width="20px" height="20px" style={{ marginRight: "18px", color: "black" }} />
        <span style={{ color: "red", alignItems: "center" }}>search</span>
      </button>
    </div>
       <div className="hotel-list">
      {hotels.map((hotel, index) => ( 
        <div key={index} className="hotel-cards">
            <div className="image-container">
          <img src={hotel.image} alt={hotel.name} className="hotel-image" />
          <IoMdHeart
                 color={favorites[index] ? "red" : "white"}
                 size={20}
                 className="heart-icon"
                 onClick={() => toggleFavorite(index)}
                 />
          </div>
          <div className="hotel-details">
            <h2>{hotel.name}</h2>
            <p className="location">{hotel.location}</p>
            <p className="distance">{hotel.distance}</p>
            {hotel.beachDistance && <p className="beach-distance">🏖️ {hotel.beachDistance}</p>}
            <p className="room">{hotel.roomType} - {hotel.beds}</p>
            <p className="cancellation">{hotel.cancellation}</p>
            <div className="pricing">
              <div>
                <span className="price">{hotel.price}</span>
                <span className="old-prices">{hotel.oldPrice}</span>
                <p className="taxes">{hotel.taxes}</p>
              </div>
              <button className="available" onClick={() => navigate(hotel.path)}>
                {hotel.available}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
        </>
    );
}
export {DesPlace1,DesPlace2,DesPlace3,DesPlace4,DesPlace5,DesPlace6,DesPlace7,DesPlace8};