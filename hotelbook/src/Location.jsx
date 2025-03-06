import React, { useState, useRef, useEffect } from "react";
import { GrLocation } from "react-icons/gr";
import { RiHotelFill } from "react-icons/ri";
import './index.css';

const LocationSelector = ({ setSelectedlocation,  updateSearchValue }) => {
  const locations = [
    { name: "Bengaluru", state: "Karnataka", country: "India", path: "/city/Bangalore" },
    { name: "Chennai", state: "Tamil Nadu", country: "India", path: "/city/Chennai" },
    { name: "New Delhi", state: "New Delhi", country: "India", path: "/city/NewDelhi" },
    { name: "Mumbai", state: "Maharashtra", country: "India", path: "/city/Mumbai" },
    { name: "Goa", state: "Goa", country: "India", path: "/city/Goa" },
    { name: "Hyderabad", state: "Hyderabad", country: "India", path: "/city/Hyderabad" },
    { name: "Kolkata", state: "Kolkata", country: "India", path: "/city/Kolkata"},
    { name: "Himachal Pradesh", state: "Himachal Pradesh", country: "India", path: "/city/HimachalPradesh"},
    { name: "Lemon Tree Hotel White", state: "Bengaluru", country: "India", path: "/hotel/LemonTreeHotelWhite" },
    { name: "Vividus Hotel", state: "Bengaluru", country: "India", path: "/hotel/Vividus" },
    { name: "Hotel City Tower", state: "Chennai", country: "India", path: "/hotel/HotelCityTower" },
    { name: "Hotel Chanchal Continental", state: "New Delhi", country: "India", path: "/hotel/HotelChanchalContinental" },
    { name: "Olice Zip Koramangala", state: "Bengaluru", country: "India", path: "/hotel/OliceZipKoramangala" },
    { name: "Fab Hotel Royal Stay", state: " New Delhi ", country: "India", path: "/hotel/FabHotelRoyalStay" },
    { name: "Green Meadows Resort", state: "Chennai", country: "India", path: "/hotel/GreenMeadowsResort" },
    { name: "Raj Park Hotel", state: "Chennai", country: "India", path: "/hotel/RajParkHotel" },
    { name: "The St. Regis Mumbai", state: "Mumbai", country: "India", path: "/hotel/TheSt.RegisMumbai" },
  ];

  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const locationRef = useRef(null);

  useEffect(() => {
    if (updateSearchValue) {
        setSearch(updateSearchValue);
    }
  }, [updateSearchValue]);
  
  const handleSearch = (event) => {
    setSearch(event.target.value);
    setShowDropdown(true);
  };
  const handleSelect = (location) => {
    setSearch(location.name);
    setShowDropdown(false);
    setSelectedlocation(location);
  };

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="location-container">
       <div className="input-wrapper">
        <RiHotelFill className="input-icon" />
        <input
          type="text"
          placeholder="Where to?"
          value={search}
          onChange={handleSearch}
          onFocus={() => setShowDropdown(true)}
          className="location-input"
        />
      </div>
      {showDropdown && (
        <div className="dropdown" ref={locationRef}>
          <p className="dropdown-title">Popular Destinations</p>
          {filteredLocations.length > 0 ? (
            filteredLocations.map((location, index) => (
              <div key={index} className="dropdown-items" onClick={() => handleSelect(location)}>
                <span className="location-name">{location.name}</span>
                <span className="location-details"><GrLocation />City · {location.state}, {location.country}</span>
              </div>
            ))
          ) : (
            <p className="no-results">No destinations found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationSelector;
