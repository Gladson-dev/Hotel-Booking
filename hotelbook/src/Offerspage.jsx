import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Offerspage.css';

function Offerpage() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();
  
 
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; 

  const handleClaimClick = () => {
    if (isLoggedIn) {
      setPopupVisible(true);
    } else {
      alert("Please log in to claim this coupon!");
      navigate('/login');
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const deals = [
    {
      id: 1,
      design: "🎉 ",
      discount: "₹2,500",
      promoCode: "VELVETORCHID5",
      expires: "3 days",
      image: "https://cdn0.agoda.net/images/emailmarketing/contentcard/upto8_mspa.png",
      descrip: "Special Savings Offer"
    },
    {
      id: 2,
      design: "🔥 ",
      discount: "₹4,000",
      promoCode: "VELVETORCHID8",
      expires: "5 days",
      minSpend: "₹9,170",
      image: "https://i.pinimg.com/474x/ac/e3/58/ace358f4151f57ef128926c40977a8a3.jpg",
      descrip: "Limited-Time Deal"
    },
    {
      id: 3,
      design: "🏝️",
      discount: "₹6,000%",
      promoCode: "VELVETORCHID8",
      expires: "7 days",
      minSpend: "₹9,170",
      image: "https://i.pinimg.com/474x/a9/3d/dc/a93ddc83465af45048ca77ddda774cdf.jpg",
      descrip: "Best Deal of the Season"
    },
  ];

  return (
    <div className="contains">
    <div className="container">
      <div className="pic">
        <h1 className="title">Today's Deals</h1>
      </div>
      <div className="deals-grid">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-card">
            <div className="discount">
              <img src={deal.image} alt={deal.expires} className='discount-image' />
            </div>
            <h3>{deal.design}Up to {deal.discount} Off Hotels - {deal.descrip}</h3>
            <p>Expires in: {deal.expires}</p>
            <p className="promo-code">Promo Code: {deal.promoCode}</p>
            <button className="claim-button" onClick={handleClaimClick}>Claim Coupon</button>
          </div>
        ))}
      </div>

      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button className="close-button" onClick={closePopup}>&times;</button>
            <img src="https://i.pinimg.com/474x/6f/22/de/6f22deae2619f1c88b1810c256b2d9ee.jpg" alt="Discount" className="popup-image" />
            <h3>This coupon is already saved into your account.</h3>
            <p>Apply this coupon on the payment page for eligible bookings and enjoy your additional savings!</p>
            <button className="got-it-button" onClick={closePopup}>Got it!</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

function Offering() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();
  
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'; 

  const handleClaimClick = () => {
      if (isLoggedIn) {
          setPopupVisible(true);
        } else {
          alert("Please log in to claim this coupon!");
          navigate('/login');
        }
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const deals = [
    {
      id: 1,
      image: "https://cdn6.agoda.net/images/WebCampaign/20250203_isc_emea_oc_earlybird/home_banner_web/en-us.png",
      descrip: "🐥 Don’t miss this limited-time ,make it early",
      descrip1: "🌟 Early bird deal—secure your dream stay today!"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/474x/ba/4f/78/ba4f78a7e2f78d2a05146abd938cfdb3.jpg",
      descrip: "🤑 Cashback Offer – Get Money Back on Your Booking! ",
      descrip1: "🪙 Making your travel even more rewarding"
    },
    {
      id: 3,
      image: "https://cdn6.agoda.net/images/WebCampaign/20250123_ss_doubledaysales/home_banner_web/en-us.png",
      descrip: "💖 Extra 15% discount on romantic trips",
      descrip1: "💞 Limited - time deal – don’t miss out !"
    },
  ];

  return (
    <div className="contains">
    <div className="container">
      <div className="deals-grid">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-card">
            <div className="discount">
              <img src={deal.image} alt="Special Offer" className='discount-image' />
            </div>
            <h3>{deal.descrip}</h3>
            <h4>{deal.descrip1}</h4>
            <button className="claim-button" onClick={handleClaimClick}>Claim Coupon</button>
          </div>
        ))}
      </div>

      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button className="close-button" onClick={closePopup}>&times;</button>
            <img src="https://i.pinimg.com/474x/6f/22/de/6f22deae2619f1c88b1810c256b2d9ee.jpg" alt="Discount" className="popup-image" />
            <h3>This coupon is already saved into your account.</h3>
            <p>Apply this coupon on the payment page for eligible bookings and enjoy your additional savings!</p>
           <button className="got-it-button" onClick={closePopup}>Got it!</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export { Offerpage, Offering };
