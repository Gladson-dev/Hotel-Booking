import React from 'react';
import "./index.css";
import { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import CalendarButton from './CalendarButton';
import RoomSelector from './Travellers';
import LocationSelector from './Location';
import { useNavigate} from 'react-router-dom';
import { HotelCarousel, Excitplace } from './SlideContent';
import Offers from './ExclusiveOffers';
import Destinations from './Destination';

export default function HeaderContent() {    
  const navigate = useNavigate(); 
    const [selectedlocation, setSelectedlocation] = useState(null);
    const [locationInputValue, setLocationInputValue] = useState('');

    const updateLocationInput = (location) => {
        setLocationInputValue(location);
    };
  
    const handleSearchClick = () => {
      if (selectedlocation && selectedlocation.path) {
        navigate(selectedlocation.path);  
      } else {
        alert("Please select a location first!");
      }
    };
  return (
    <>
    <div className="main-page">
       <div className="check">
          <LocationSelector setSelectedlocation={setSelectedlocation} updateSearchValue={locationInputValue} />
          <CalendarButton />
          <RoomSelector />
          <button 
            id="search" 
            style={{ backgroundColor: 'blue', marginRight: '48px', borderRadius: '5px' }} 
            onClick={handleSearchClick}
          >
            <FaSearch width="20px" height="20px" style={{ marginRight: '18px',color:'black' }} />
            <span style={{ color: 'red', alignItems: 'center' }}>search</span>
          </button>
        </div>
        <p style={{ color: 'red', fontSize: "20px" }}>
        <center>Exclusive Offers</center>
        </p>
        <div className="offer">
        <Offers />
        </div>
        <div>
        <center>
        <p style={{ fontFamily: 'Times new roman', color: 'black', fontSize: '25px' }}>
        Deals of the Weekend
        </p>
        </center>
        <HotelCarousel setSelectedLocation={setSelectedlocation} updateLocationInput={updateLocationInput}  />
        </div>
        <div>
        <center>
        <p style={{ fontFamily: 'Times new roman', color: 'black', fontSize: '25px' }}>
        Happy Weekend
        </p>
        </center>
        <Excitplace setSelectedLocation={setSelectedlocation} updateLocationInput={updateLocationInput} />
        </div>
        <div>
        <Destinations updateLocationInput={updateLocationInput}/>
      </div>
     </div>
    </>
  );
}
