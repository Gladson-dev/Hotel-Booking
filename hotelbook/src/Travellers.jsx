import React, { useState,useEffect,useRef } from 'react';
import { IoPersonSharp } from "react-icons/io5";
import './index.css'; 

const RoomSelector = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleIncrease = (type) => {
    if (type === 'adults') {
      setAdults(adults + 1);
    } else if (type === 'children') {
      setChildren(children + 1);
    } else if (type === 'rooms') {
      setRooms(rooms + 1);
    }
  };
  const handleDecrease = (type) => {
    if (type === 'adults' && adults > 1) {
      setAdults(adults - 1);
    } else if (type === 'children' && children > 0) {
      setChildren(children - 1);
    } else if (type === 'rooms' && rooms > 1) {
      setRooms(rooms - 1);
    }
  };
   const travellerRef = useRef(null);
     useEffect(() => {
      const handleClickOutside = (event) => {
        if (travellerRef.current && !travellerRef.current.contains(event.target)) {
          setShowDropdown(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  return (
    <div className="room-selector">
      <button
        id='search'
        onClick={() => setShowDropdown(!showDropdown)}
      >
    <IoPersonSharp width="20px" height="20px" style={{ marginRight: '18px',color:'black' }} />
        <span style={{ color: 'blue', alignItems: 'center' }}>Travelers</span>
      </button>
      {showDropdown && (
        <div className="dropdown-content" ref={travellerRef}>
          <div className="count-section">
            <h3>Adults</h3>
            <button onClick={() => handleDecrease('adults')}>-</button>
            <span>{adults}</span>
            <button onClick={() => handleIncrease('adults')}>+</button>
          </div>
          <div className="count-section">
            <h3>Children</h3>
            <button onClick={() => handleDecrease('children')}>-</button>
            <span>{children}</span>
            <button onClick={() => handleIncrease('children')}>+</button>
          </div>
          <div className="count-section">
            <h3>Rooms</h3>
            <button onClick={() => handleDecrease('rooms')}>-</button>
            <span>{rooms}</span>
            <button onClick={() => handleIncrease('rooms')}>+</button>
          </div>
          <button id="done-button">Done</button>
        </div>
      )}
    </div>
  );
};

export default RoomSelector;
