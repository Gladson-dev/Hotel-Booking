import { useEffect, useState } from 'react';
import './Favourites.css';
import { useNavigate } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function Favourite() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (hotelName) => {
    const updatedFavorites = favorites.filter((fav) => fav.name !== hotelName);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <div>
        <h1><center>Your Favorite Hotels</center></h1>
      </div>
      <div className="favorites-container">
        {favorites.length === 0 ? (
          <p>No favorites added yet.</p>
        ) : (
          favorites.map((fav, index) => (
            <div key={index} className="favorite-card" onClick={()=>navigate(fav.path)}>
              <IoClose className="close-button" onClick={(e) => {e.stopPropagation();removeFromFavorites(fav.name)}} />
              <img src={fav.image} alt={fav.name} className="hotels-image" />
              <div className="hotels-details">
                <p>{fav.review}</p>
                <h3>{fav.name}</h3>
                <p><span className="ratinges">{fav.rating}</span><span>, {fav.reviews}</span></p>
                <p><CiLocationOn /> {fav.location}</p>
                <div className="hotels-charge">
                  <p className="rupee" style={{marginLeft:"75px"}}>{fav.day}</p>
                  <h4 className="money">{fav.rupees}</h4>
                  <p className="rupee">{fav.tax}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
