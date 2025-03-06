import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export default function Header() {
  useEffect(() => {
    document.title = "Velvet Orchid Hotel";
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/png";
    link.href = "icons.png";
    document.head.appendChild(link);
  }, []);

  const navigate = useNavigate();
  const [IsOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu-container")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="head-left">
          <img
            src="icons.png"
            alt="the velvet orchid"
            className="icon-png"
            onClick={() => setIsOpen(true)}
          />
          <p onClick={() => navigate("/visit")} id="hotel-title">
            Velvet Orchid .com
          </p>
          {IsOpen && (
            <div className="popup-overlay" onClick={() => setIsOpen(false)}>
              <img
                src="icons.png"
                alt="the velvet orchid"
                className="popup-image"
                onClick={() => setIsOpen(true)}
              />
            </div>
          )}
        </div>

        <div className="head-right">
          <nav>
            <Link to="/">
              <span className="head">Home</span>
            </Link>
            <Link to="/visit">
              <span className="head">About</span>
            </Link>
            <Link to="/contact">
              <span className="head">Contact</span>
            </Link>
            <Link to="/login">
              <span className="head">
                <FaRegCircleUser  className="menu-icon" />
                Log in
              </span>
            </Link>
          </nav>

          <div className="menu-container">
            <p className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="head-menu" >
              <FiMenu className="menu-icon" />
               Menu
               </span>
            </p>

            {menuOpen && (
              <nav>
              <div className="dropdown-menu">
                <div className="dropdown-item">
                  <FaRegHeart className="dropdown-icon" />
                <Link to="/favourites"  ><span className="heads">Favourites</span></Link >
                </div>
                <div className="dropdown-item">
                  <AiOutlineQuestionCircle className="dropdown-icon" />
                  <span>Help and support</span>
                </div>
              </div>
              </nav>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
