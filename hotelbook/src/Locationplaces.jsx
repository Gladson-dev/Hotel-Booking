import React, { useState, useEffect, useRef } from "react";
import "./Locationplaces.css";
import './index.css';
import { useNavigate, useLocation } from "react-router-dom"; 
import { FaSearch } from "react-icons/fa";
import { Facilities, Info, Overview, Reviews } from "./LocationContent";
import { Facilities2, Info2, Overview2, Reviews2 } from "./LocationContent2";
import { Facilities3, Info3, Overview3, Reviews3 } from "./LocationContent3";
import { Facilities4, Info4, Overview4, Reviews4 } from "./LocationContent4";
import { Facilities5, Info5, Overview5, Reviews5 } from "./LocationContent5";
import { Facilities6, Info6, Overview6, Reviews6 } from "./LocationContent6";
import { Facilities7, Info7, Overview7, Reviews7 } from "./LocationContent7";
import { Facilities8, Info8, Overview8, Reviews8 } from "./LocationContent8";
import { Facilities9, Info9, Overview9, Reviews9 } from "./LocationContent9";
import { Facilities10, Info10, Overview10, Reviews10 } from "./LocationContent10";
import { Facilities11, Info11, Overview11, Reviews11 } from "./LocationContent11";
import { Facilities12, Info12, Overview12, Reviews12 } from "./LocationContent12";
import LocationSelector from "./Location";
import CalendarButton from "./CalendarButton";
import RoomSelector from "./Travellers";

const defaultHotel = {
  review: "⭐⭐⭐⭐",
  name: "Lemon Tree Hotel White",
  location: "Bengaluru, India",
  image: "https://i.pinimg.com/474x/3f/a2/6c/3fa26c3564eafc83ba09864b402f2c1a.jpg",
  rating: "6.7",
  reviews: "120 reviews",
  day: "1 day,2 adults",
  rupees: "₹ 2,845",
  tax: "+₹120 taxes and charges",
  path: "/hotel/LemonTreeHotelWhite",
};

function Place1() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef([]);
  const navigate = useNavigate(); 

  const tabs = [
    { name: "Overview", id: "overview", path: <Overview hotel={defaultHotel} /> },
    { name: "Info & prices", id: "info-prices", path: <Info /> },
    { name: "Facilities", id: "facilities", path: <Facilities /> },
    { name: "Reviews", id: "reviews", path: <Reviews /> },
  ];  
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabs.findIndex((tab) => tab.id === entry.target.id);
            setActiveTab(index);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleTabClick = (index, id) => {
    setActiveTab(index);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [selectedlocation, setSelectedlocation] = useState("/city/Bangalore");
  const [locationInputValue, setLocationInputValue] = useState("Bengaluru");

  const handleSearchClick = () => {
    if (selectedlocation && selectedlocation.path) {
      navigate(selectedlocation.path);  
    }
   else if (locationInputValue.trim() === "Bengaluru") {
      navigate(selectedlocation);
    } 
   else {
      alert("Please enter a valid  location first!");
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
      <div className="tabs-container">
        <div className="tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab ${activeTab === index ? "active" : ""}`}
              onClick={() => handleTabClick(index, tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="content">
          {tabs.map((tab, index) => (
            <div
              key={index}
              id={tab.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="section"
            >
              {tab.path}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
const hotel2 = {
    review: "⭐⭐⭐⭐",
    name: "Vividus",
    location: "Bengaluru, India",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/1b/94/d6/2c/exterior.jpg",
   rating: "6.7",
   reviews: "120 reviews",
    day: "1 day,2 adults",
    rupees: "₹ 3,475",
   tax: "+₹120 taxes and charges",
    path: "/hotel/Vividus",
  };
function Place2()
{
    const [activeTab, setActiveTab] = useState(0);
    const sectionRefs = useRef([]); 
    const navigate = useNavigate(); 
    const tabs = [
      { name: "Overview", id: "overview",path:<Overview2 /> },
      { name: "Info & prices", id: "info-prices",path:<Info2/> },
      { name: "Facilities", id: "facilities" ,path:<Facilities2 />},
      { name: "reviews", id: "reviews",path:<Reviews2 />},
    ];
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = tabs.findIndex((tab) => tab.id === entry.target.id);
              setActiveTab(index);
            }
          });
        },
        { threshold: 0.6 } 
      );
  
      sectionRefs.current.forEach((section) => {
        if (section) observer.observe(section);
      });
  
      return () => {
        sectionRefs.current.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      };
    }, []);
    const handleTabClick = (index, id) => {
      setActiveTab(index);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const handleSearchClick = () => {
      if (selectedlocation && selectedlocation.path) {
        navigate(selectedlocation.path);  
      }
     else if (locationInputValue.trim() === "Bengaluru") {
        navigate(selectedlocation);
      } 
     else {
        alert("Please enter a valid  location first!");
      }
    };
    const [selectedlocation, setSelectedlocation] = useState("/city/Bangalore");
    const [locationInputValue, setLocationInputValue] = useState("Bengaluru");
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
      <div className="tabs-container">
        <div className="tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`tab ${activeTab === index ? "active" : ""}`}
              onClick={() => handleTabClick(index, tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="content">
          {tabs.map((tab, index) => (
            <div
              key={index}
              id={tab.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="section"
            >
             {tab.path}
            </div>
          ))}
        </div>
      </div>
      </>
    );
}
const hotel3 = {
    review: "⭐⭐⭐⭐",
    name: "Hotel City Tower",
  location: "Chennai, India",
    image: "https://i.pinimg.com/736x/5f/00/9c/5f009c3e545392390366055e941803a0.jpg",
    rating: "6.7",
    reviews: "120 reviews",
   day: "1 day,2 adults",
   rupees: "₹ 1,924",
    tax: "+₹120 taxes and charges",
    path: "/hotel/HotelCityTower",
  };
function Place3()
{
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef([]);
  const navigate = useNavigate(); 
  const tabs = [
    { name: "Overview", id: "overview",path:<Overview3 /> },
    { name: "Info & prices", id: "info-prices",path:<Info3 /> },
    { name: "Facilities", id: "facilities" ,path:<Facilities3 />},
    { name: "reviews", id: "reviews",path:<Reviews3 />},
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabs.findIndex((tab) => tab.id === entry.target.id);
            setActiveTab(index);
          }
        });
      },
      { threshold: 0.6 } 
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  const handleTabClick = (index, id) => {
    setActiveTab(index);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleSearchClick = () => {
    if (selectedlocation && selectedlocation.path) {
      navigate(selectedlocation.path);  
    }
   else if (locationInputValue.trim() === "Chennai") {
      navigate(selectedlocation);
    } 
   else {
      alert("Please enter a valid  location first!");
    }
  };
  const [selectedlocation, setSelectedlocation] = useState("/city/Chennai");
  const [locationInputValue, setLocationInputValue] = useState("Chennai");
  return (<>
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
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index, tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            id={tab.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="section"
          >
           {tab.path}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
const hotel4 = {
   review: "⭐⭐⭐⭐",
    name: "Hotel Chanchal Continental",
   location: "New Delhi, India",
    image: "https://i.pinimg.com/736x/0c/c8/a1/0cc8a1c48919442c8b098e0e83e00c79.jpg",
    rating: "6.7",
    reviews: "120 reviews",
    day: "1 day,2 adults",
    rupees: "₹ 2,399",
    tax: "+₹120 taxes and charges",
    path: "/hotel/HotelChanchalContinental",
  };
function Place4()
{
    
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef([]);
  const navigate = useNavigate(); 
  const tabs = [
    { name: "Overview", id: "overview",path:<Overview4 /> },
    { name: "Info & prices", id: "info-prices",path:<Info4 /> },
    { name: "Facilities", id: "facilities" ,path:<Facilities4 />},
    { name: "reviews", id: "reviews",path:<Reviews4 />},
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabs.findIndex((tab) => tab.id === entry.target.id);
            setActiveTab(index);
          }
        });
      },
      { threshold: 0.6 } 
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  const handleTabClick = (index, id) => {
    setActiveTab(index);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleSearchClick = () => {
    if (selectedlocation && selectedlocation.path) {
      navigate(selectedlocation.path);  
    }
   else if (locationInputValue.trim() === "New Delhi") {
      navigate(selectedlocation);
    } 
   else {
      alert("Please enter a valid  location first!");
    }
  };
  const [selectedlocation, setSelectedlocation] = useState("/city/NewDelhi" );
  const [locationInputValue, setLocationInputValue] = useState("New Delhi");
  return (<>
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
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index, tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            id={tab.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="section"
          >
           {tab.path}
          </div>
        ))}
      </div>
    </div>
    </>
  );

}
const hotel5 = {
    review: "⭐⭐⭐⭐",
    name: "Olice Zip Koramangala",
   location: "Bengaluru, India",
   image: "https://i.pinimg.com/736x/49/b8/10/49b81003219eb29255680f09c2364800.jpg",
    rating: "6.7",
    reviews: "120 reviews",
    day: "1 day,2 adults",
    rupees: "₹ 1,642",
    tax: "+₹120 taxes and charges",
  path: "/hotel/OliceZipKoramangala",
  };
function Places1()
{
    
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef([]);
  const navigate = useNavigate(); 
  const tabs = [
    { name: "Overview", id: "overview",path:<Overview5/> },
    { name: "Info & prices", id: "info-prices",path:<Info5/> },
    { name: "Facilities", id: "facilities" ,path:<Facilities5/>},
    { name: "reviews", id: "reviews",path:<Reviews5/>},
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabs.findIndex((tab) => tab.id === entry.target.id);
            setActiveTab(index);
          }
        });
      },
      { threshold: 0.6 } 
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  const handleTabClick = (index, id) => {
    setActiveTab(index);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleSearchClick = () => {
    if (selectedlocation && selectedlocation.path) {
      navigate(selectedlocation.path);  
    }
   else if (locationInputValue.trim() === "Bengaluru") {
      navigate(selectedlocation);
    } 
   else {
      alert("Please enter a valid  location first!");
    }
  };
  const [selectedlocation, setSelectedlocation] = useState("/city/Bangalore");
  const [locationInputValue, setLocationInputValue] = useState("Bengaluru");
  return (<>
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
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index, tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            id={tab.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="section"
          >
           {tab.path}
          </div>
        ))}
      </div>
    </div>
    </>
  );

}
const hotel6 = {
    review: "⭐⭐⭐⭐",
    name: "FabHotel Royal Stay",
    location: "Bengaluru, India",
    image: "https://i.pinimg.com/736x/a0/a3/95/a0a39500693515a8f772529f74352070.jpg",
    rating: "6.7",
    reviews: "120 reviews",
    day: "1 day,2 adults",
    rupees: "₹ 1,622",
    tax: "+₹120 taxes and charges",
    path: "/hotel/FabHotelRoyalStay",
  };
function Places2()
{
    
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef([]);
  const navigate = useNavigate(); 
  const tabs = [
    { name: "Overview", id: "overview",path:<Overview6/> },
    { name: "Info & prices", id: "info-prices",path:<Info6/> },
    { name: "Facilities", id: "facilities" ,path:<Facilities6/>},
    { name: "reviews", id: "reviews",path:<Reviews6 />},
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabs.findIndex((tab) => tab.id === entry.target.id);
            setActiveTab(index);
          }
        });
      },
      { threshold: 0.6 } 
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  const handleTabClick = (index, id) => {
    setActiveTab(index);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleSearchClick = () => {
    if (selectedlocation && selectedlocation.path) {
      navigate(selectedlocation.path);  
    }
   else if (locationInputValue.trim() === "Bengaluru") {
      navigate(selectedlocation);
    } 
   else {
      alert("Please enter a valid  location first!");
    }
  };
  const [selectedlocation, setSelectedlocation] = useState("/city/Bangalore");
  const [locationInputValue, setLocationInputValue] = useState("Bengaluru");
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
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index, tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            id={tab.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="section"
          >
           {tab.path}
          </div>
        ))}
      </div>
    </div>
     </>
  );

}
const hotel7 = {
    review: "⭐⭐⭐⭐",
    name: "Green Meadows Resort",
    location: "Chennai, India",
    image: "https://i.pinimg.com/736x/85/5e/36/855e365e8387794118e3e3e7404356c6.jpg",
    rating: "6.7",
    reviews: "120 reviews",
   day: "1 day,2 adults",
    rupees: "₹ 1,792",
    tax: "+₹120 taxes and charges",
    path: "/hotel/GreenMeadowsResort",
  };
function Places3()
{
    
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef([]);
  const navigate = useNavigate(); 
  const tabs = [
    { name: "Overview", id: "overview",path:<Overview7/> },
    { name: "Info & prices", id: "info-prices",path:<Info7/> },
    { name: "Facilities", id: "facilities" ,path:<Facilities7/>},
    { name: "reviews", id: "reviews",path:<Reviews7 />},
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabs.findIndex((tab) => tab.id === entry.target.id);
            setActiveTab(index);
          }
        });
      },
      { threshold: 0.6 } 
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  const handleTabClick = (index, id) => {
    setActiveTab(index);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const [selectedlocation, setSelectedlocation] = useState("/city/Chennai");
  const [locationInputValue, setLocationInputValue] = useState("Chennai");
  const handleSearchClick = () => {
    if (selectedlocation && selectedlocation.path) {
      navigate(selectedlocation.path);  
    }
   else if (locationInputValue.trim() === "Chennai") {
      navigate(selectedlocation);
    } 
   else {
      alert("Please enter a valid  location first!");
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
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index, tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            id={tab.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="section"
          >
           {tab.path}
          </div>
        ))}
      </div>
    </div>
     </>
  );

}
const hotel8 = {
   review: "⭐⭐⭐⭐",
    name: "Raj Park Hotel",
   location: "Chennai, India",
   image: "https://i.pinimg.com/736x/5c/7c/5e/5c7c5e92a20e7090737949a6a62b80fe.jpg",
    rating: "6.7",
    reviews: "120 reviews",
    day: "1 day,2 adults",
    rupees: "₹ 2,499",
    tax: "+₹120 taxes and charges",
    path: "/hotel/RajParkHotel",
  };
function Places4()
{
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef([]);
  const navigate = useNavigate(); 
  const tabs = [
    { name: "Overview", id: "overview",path:<Overview8/> },
    { name: "Info & prices", id: "info-prices",path:<Info8/> },
    { name: "Facilities", id: "facilities" ,path:<Facilities8/>},
    { name: "reviews", id: "reviews",path:<Reviews8 />},
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabs.findIndex((tab) => tab.id === entry.target.id);
            setActiveTab(index);
          }
        });
      },
      { threshold: 0.6 } 
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  const handleTabClick = (index, id) => {
    setActiveTab(index);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleSearchClick = () => {
    if (selectedlocation && selectedlocation.path) {
      navigate(selectedlocation.path);  
    }
   else if (locationInputValue.trim() === "Chennai") {
      navigate(selectedlocation);
    } 
   else {
      alert("Please enter a valid  location first!");
    }
  };
  const [selectedlocation, setSelectedlocation] = useState("/city/Chennai");
  const [locationInputValue, setLocationInputValue] = useState("Chennai");
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
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index, tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            id={tab.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="section"
          >
           {tab.path}
          </div>
        ))}
      </div>
    </div>
    </>
  );

}
const hotel9 = {
    review: "⭐⭐⭐⭐",
   name: "The St. Regis Mumbai",
   location: "Mumbai, India",
    image: "https://i.pinimg.com/736x/4c/f9/3b/4cf93b54356d8b86d7a3e575b0c5f395.jpg",
    rating: "6.7",
   reviews: "120 reviews",
    day: "1 day,2 adults",
    rupees: "₹ 12,750",
    tax: "+₹120 taxes and charges",
    path: "/hotel/TheSt.RegisMumbai",
  };
function Places5()
{
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef([]); 
  const navigate = useNavigate(); 
  const tabs = [
    { name: "Overview", id: "overview",path:<Overview9/> },
    { name: "Info & prices", id: "info-prices",path:<Info9/> },
    { name: "Facilities", id: "facilities" ,path:<Facilities9/>},
    { name: "reviews", id: "reviews",path:<Reviews9 />},
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabs.findIndex((tab) => tab.id === entry.target.id);
            setActiveTab(index);
          }
        });
      },
      { threshold: 0.6 } 
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  const handleTabClick = (index, id) => {
    setActiveTab(index);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleSearchClick = () => {
    if (selectedlocation && selectedlocation.path) {
      navigate(selectedlocation.path);  
    }
   else if (locationInputValue.trim() === "Bengaluru") {
      navigate(selectedlocation);
    } 
   else {
      alert("Please enter a valid  location first!");
    }
  };
  const [selectedlocation, setSelectedlocation] = useState("/city/Bangalore");
  const [locationInputValue, setLocationInputValue] = useState("Bengaluru");
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
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index, tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            id={tab.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="section"
          >
           {tab.path}
          </div>
        ))}
      </div>
    </div>
     </>
  );
}
const hotel10 = {
   review: "⭐⭐⭐⭐",
    name: "Taj Falaknuma Palace",
    location: "Hyderabad, India",
    image: "https://i.pinimg.com/736x/4d/5c/48/4d5c48e80b16a38806d77542874d6c71.jpg",
    rating: "6.7",
    reviews: "120 reviews",
    day: "1 day,2 adults",
    rupees: "₹ 22,950",
    tax: "+₹120 taxes and charges",
    path: "/hotel/TajFalaknumaPalace",
  };
function Places6()
{
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef([]);
  const navigate = useNavigate(); 
  const tabs = [
    { name: "Overview", id: "overview",path:<Overview10/> },
    { name: "Info & prices", id: "info-prices",path:<Info10/> },
    { name: "Facilities", id: "facilities" ,path:<Facilities10/>},
    { name: "reviews", id: "reviews",path:<Reviews10 />},
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabs.findIndex((tab) => tab.id === entry.target.id);
            setActiveTab(index);
          }
        });
      },
      { threshold: 0.6 } 
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  const handleTabClick = (index, id) => {
    setActiveTab(index);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleSearchClick = () => {
    if (selectedlocation && selectedlocation.path) {
      navigate(selectedlocation.path);  
    }
   else if (locationInputValue.trim() === "Bengaluru") {
      navigate(selectedlocation);
    } 
   else {
      alert("Please enter a valid  location first!");
    }
  };
  const [selectedlocation, setSelectedlocation] = useState("/city/Bangalore");
  const [locationInputValue, setLocationInputValue] = useState("Bengaluru");
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
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index, tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            id={tab.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="section"
          >
           {tab.path}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
const hotel11 = {
    review: "⭐⭐⭐⭐",
   name: "Hyatt Ronil Goa",
    location: "Goa, India",
    image: "https://i.pinimg.com/736x/f8/f0/71/f8f071b34a4699fdd7636f99a07a0895.jpg",
   rating: "6.7",
    reviews: "120 reviews",
    day: "1 day,2 adults",
    rupees: "₹ 4,000",
    tax: "+₹120 taxes and charges",
    path: "/hotel/HyattRonilGoa",
  };
function Places7()
{
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef([]);
  const navigate = useNavigate(); 
  const tabs = [
    { name: "Overview", id: "overview",path:<Overview11/> },
    { name: "Info & prices", id: "info-prices",path:<Info11/> },
    { name: "Facilities", id: "facilities" ,path:<Facilities11/>},
    { name: "reviews", id: "reviews",path:<Reviews11 />},
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabs.findIndex((tab) => tab.id === entry.target.id);
            setActiveTab(index);
          }
        });
      },
      { threshold: 0.6 } 
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  const handleTabClick = (index, id) => {
    setActiveTab(index);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleSearchClick = () => {
    if (selectedlocation && selectedlocation.path) {
      navigate(selectedlocation.path);  
    }
   else if (locationInputValue.trim() === "Bengaluru") {
      navigate(selectedlocation);
    } 
   else {
      alert("Please enter a valid  location first!");
    }
  };
  const [selectedlocation, setSelectedlocation] = useState("/city/Bangalore");
  const [locationInputValue, setLocationInputValue] = useState("Bengaluru");
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
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index, tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            id={tab.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="section"
          >
           {tab.path}
          </div>
        ))}
      </div>
    </div>
     </>
  );
}
const hotel12 = {
    review: "⭐⭐⭐⭐",
    name: "Howard Johnson by Wyndham",
    location: "Kolkata, India",
    image: "https://i.pinimg.com/736x/e0/25/ba/e025bad2d7b207640812d2261b653516.jpg",
    rating: "6.7",
    reviews: "120 reviews",
    day: "1 day,2 adults",
    rupees: "₹ 2,200",
    tax: "+₹120 taxes and charges",
    path: "/hotel/HowardJohnsonbyWyndham",
  };
function Places8()
{
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef([]);
  const navigate = useNavigate(); 
  const tabs = [
    { name: "Overview", id: "overview",path:<Overview12/> },
    { name: "Info & prices", id: "info-prices",path:<Info12/> },
    { name: "Facilities", id: "facilities" ,path:<Facilities12/>},
    { name: "reviews", id: "reviews",path:<Reviews12 />},
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabs.findIndex((tab) => tab.id === entry.target.id);
            setActiveTab(index);
          }
        });
      },
      { threshold: 0.6 } 
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  const handleTabClick = (index, id) => {
    setActiveTab(index);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleSearchClick = () => {
    if (selectedlocation && selectedlocation.path) {
      navigate(selectedlocation.path);  
    }
   else if (locationInputValue.trim() === "Bengaluru") {
      navigate(selectedlocation);
    } 
   else {
      alert("Please enter a valid  location first!");
    }
  };
  const [selectedlocation, setSelectedlocation] = useState("/city/Bangalore");
  const [locationInputValue, setLocationInputValue] = useState("Bengaluru");
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
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index, tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            id={tab.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="section"
          >
           {tab.path}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
const hotel13 = {
    review: "⭐⭐⭐⭐",
    name: "Hotel ORSQUARE HOMES",
    location: "Himachal Pradesh, India",
    image: "https://i.pinimg.com/736x/d0/73/05/d07305e6d5c239b7f1720d41177207a6.jpg",
    rating: "6.7",
    reviews: "120 reviews",
    day: "1 day,2 adults",
    rupees: "₹ 3,000",
    tax: "+₹120 taxes and charges",
    path: "/hotel/HotelORSQUAREHOMES",
  };
function Places9()
{
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef([]);
  const navigate = useNavigate(); 
  const tabs = [
    { name: "Overview", id: "overview",path:<Overview12/> },
    { name: "Info & prices", id: "info-prices",path:<Info12/> },
    { name: "Facilities", id: "facilities" ,path:<Facilities12/>},
    { name: "reviews", id: "reviews",path:<Reviews12/>},
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = tabs.findIndex((tab) => tab.id === entry.target.id);
            setActiveTab(index);
          }
        });
      },
      { threshold: 0.6 } 
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  const handleTabClick = (index, id) => {
    setActiveTab(index);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleSearchClick = () => {
    if (selectedlocation && selectedlocation.path) {
      navigate(selectedlocation.path);  
    }
   else if (locationInputValue.trim() === "Bengaluru") {
      navigate(selectedlocation);
    } 
   else {
      alert("Please enter a valid  location first!");
    }
  };
  const [selectedlocation, setSelectedlocation] = useState("/city/Bangalore");
  const [locationInputValue, setLocationInputValue] = useState("Bengaluru");
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
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index, tab.id)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            id={tab.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="section"
          >
           {tab.path}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
export {Place1,Place2,Place3,Place4,Places1,Places2,Places3,Places4,Places5,Places6,Places7,Places8,Places9};