import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"; 

const cities = [
  { name: "New Delhi", image: "https://images.pexels.com/photos/4204698/pexels-photo-4204698.jpeg?auto=compress&cs=tinysrgb&w=600", path: "/city/NewDelhi" },
  { name: "Bengaluru", image: "https://tse4.mm.bing.net/th?id=OIP.kz5aAFZ8ZFULY_Rnr3Dc5QAAAA&pid=Api&P=0&h=180", path: "/city/Bangalore" },
  { name: "Mumbai", image: "https://tse1.mm.bing.net/th?id=OIP.u4DBAFCiWYD6e8Xel9JxWgHaEK&pid=Api&P=0&h=180", path: "/city/Mumbai" },
  { name: "Chennai", image: "https://tse4.mm.bing.net/th?id=OIP.iYM240Dt8wfAq21Zy84jQgHaE-&pid=Api&P=0&h=180", path: "/city/Chennai" },
  { name: "Hyderabad", image: "https://tse1.mm.bing.net/th?id=OIP.mVe7rLdMuW_LzaH8DzZeWQHaDt&pid=Api&P=0&h=180", path: "/city/Hyderabad" },
  { name: "Goa", image: "https://tse2.mm.bing.net/th?id=OIP.9wDrLU1H5dRow4CaPSsw1wHaFj&pid=Api&P=0&h=180", path: "/city/Goa" },
  { name: "Kolkata", image: "https://tse4.mm.bing.net/th?id=OIP.K3IT2wsdL4cm7hHZ91MAmQHaEK&pid=Api&P=0&h=180", path: "/city/Kolkata" },
  { name: "Himachal Pradesh", image: "https://tse3.mm.bing.net/th?id=OIP.4L8pcRB1npnbRCx7qslvzwHaFj&pid=Api&P=0&h=180", path: "/city/HimachalPradesh" },
];

const Destinations = ({ updateLocationInput }) => {
const navigate = useNavigate();
const handleImageClick = (location) => {
  updateLocationInput(location); 
};

  return (
     <>
      <h1 style={{ fontFamily:'Times new roman' ,fontSize:'25px',textAlign:'center'}}>Explore Indian Cities</h1>
      <div className="grid-container">
        {cities.map((city, index) => (
          <div key={index} className="city-card" onClick={() => {navigate(city.path),handleImageClick(city.name);}}  >
            <img src={city.image} alt={city.name} className="city-image" />
            <div className="city-name">
              {city.name} 
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" 
                alt="Indian Flag" 
                className="flag-icon" 
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Destinations;
