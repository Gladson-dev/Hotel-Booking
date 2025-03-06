import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Offers() {
  const images = [
    "https://tse4.mm.bing.net/th?id=OIP.7WlxvLP_315mVQ288jUbFQHaC1&pid=Api&P=0&h=180",
    "https://cdn6.agoda.net/images/WebCampaign/dealspagebanner_hp_web/en-us.png",
    "https://cdn6.agoda.net/images/WebCampaign/20250203_isc_emea_oc_earlybird/home_banner_web/en-us.png",
    "https://tse2.mm.bing.net/th?id=OIP.owZace8R1B4j1NrJmt1aPQAAAA&pid=Api&P=0&h=180",
    "https://cdn6.agoda.net/images/WebCampaign/20250123_ss_doubledaysales/home_banner_web/en-us.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate=useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="offer-container">
      <div className="offer-slider">
        <img src={images[currentIndex]} alt="offer" className="offer-image" onClick={()=>navigate("/offers/claim")} />
      </div>
    </div>
  );
}
  