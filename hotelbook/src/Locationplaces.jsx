import React,{useState,useEffect,useRef} from "react";
import "./Locationplaces.css";
import './index.css';
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Facilities,  Info, Overview, Reviews } from "./LocationContent";
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

function Place1() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef([]);
  const navigate = useNavigate(); 

  const tabs = [
    { name: "Overview", id: "overview", path: <Overview /> },
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