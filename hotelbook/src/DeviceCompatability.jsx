
export default function Device()
{
    const hotels = [
        {
          name: "Raj Park Hotel Chennai",
          location: "Central Chennai, Chennai",
          distance: "2.3 km from centre",
          beachDistance: "3 km from beach",
          roomType: "Deluxe Double or Twin Room",
          beds: "1 double or 2 singles",
          cancellation: "Free cancellation",
          price: "₹5,859",
          oldPrice: "₹6,300",
          taxes: "+ ₹703 taxes and charges",
          rating: 6.4,
          reviews: 322,
          image: "https://via.placeholder.com/300",
        },
        {
          name: "FabHotel Vista Park",
          location: "Thoraipakkam, Chennai",
          distance: "12.1 km from centre",
          roomType: "Deluxe Room",
          beds: "1 double bed",
          cancellation: "Free cancellation & No prepayment needed",
          price: "₹2,024",
          oldPrice: "₹4,216",
          taxes: "+ ₹243 taxes and charges",
          rating: 8.0,
          reviews: 5,
          image: "https://via.placeholder.com/300",
        },
      ];
    return(
        <>
        <div className="hotel-list">
        {hotels.map((hotel, index) => (
             <div className="hotel-card">
             <img src={hotel.image} alt={hotel.name} className="hotel-image" />
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
                   <span className="old-price">{hotel.oldPrice}</span>
                   <p className="taxes">{hotel.taxes}</p>
                 </div>
                 <div className="rating">
                   {hotel.rating} ⭐ ({hotel.reviews} reviews)
                 </div>
               </div>
             </div>
           </div>
            ))}
        </div>
        </>
    );
}