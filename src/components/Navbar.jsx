// Navbar.jsx
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  FaSearch,
  FaUser,
  FaBars,
  FaCaretDown,
  FaFacebookF,
  FaLinkedinIn,
  FaAngleDown,
} from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";
import navLinks from "../data/navLinks"; // Import the data
import { Link } from "react-router-dom"; // Use Link for routing
import "../CSS/Navbar.css";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  return (
    <header className="navbar">
      {/* Large Screen Navbar */}
      <div className="navbar-container">
        <Link to="/">
          <div className="logo">
            <img src="/kforce.png" alt="" />
          </div>
        </Link>

        <nav className="large-screen-nav">
          {navLinks.map((link, index) => (
            <div
              className="nav-item"
              key={index}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.url}
                className="nav-link"
                onMouseEnter={() => setActiveDropdown(index)}
              >
                {link.name}
                <FaAngleDown className="dropdown-icon" />
              </Link>
              {activeDropdown === index && (
                <div className="dropdown">
                  {link.subLinks.map((subLink, subIndex) => (
                    <div key={subIndex} className="dropdown-item-container">
                      <Link to={subLink.url} className="dropdown-item">
                        {subLink.name}
                      </Link>
                      <p className="sublink-description">
                        {subLink.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="alone-link">
            <p>1-877-453-6723</p>
            <Link to="/" className="link">
              FIND AN OFFICE
            </Link>
          </div>
        </nav>

        <div className="large-screen-actions">
          <div className="phone-and-social">
            <div className="socials">
              <Link to="/signin" className="sign-in">
                <FaFacebookF className="social-icons" />
              </Link>
              <Link to="/signin" className="sign-in">
                <FaXTwitter className="social-icons" />
              </Link>
              <Link to="/signin" className="sign-in">
                <FaLinkedinIn className="social-icons" />
              </Link>
              <Link to="/signin" className="sign-in">
                <TiSocialInstagram className="social-icons" />
              </Link>
            </div>
          </div>
          <div className="search-and-signin">
            <FaSearch className="search-icon" onClick={toggleSearch} />
            <Link to="/signin" className="sign-in">
              SIGN IN
            </Link>
          </div>
        </div>
      </div>

      {isSearchOpen && (
        <div className="search-bar-container">
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
            <FaSearch className="search-bar-icon" />
          </div>
        </div>
      )}

      {/* Small Screen Navbar */}
      <div className="small-screen-icons">
        <Link to="" className="user-icon">
          <FaUser />
        </Link>
        <Link to="/">
          <div className="logo">
            <img src="/kforce.png" alt="" />
          </div>
        </Link>
        {/* <FaSearch className="search-icon" onClick={toggleSearch} /> */}
        <FaBars className="hamburger-menu" onClick={toggleSidebar} />
      </div>

      {isSidebarOpen && (
        <aside className="sidebar">
          <button className="close-menu-btn" onClick={toggleSidebar}>
            Close Menu
          </button>
          <div className="sidebar-nav-links">
            {navLinks.map((link, index) => (
              <div className="sidebar-item" key={index}>
                <div className="sidebar-main-link-container">
                  <Link to={link.url} className="sidebar-main-link">
                    {link.name}
                  </Link>
                  <div
                    className="sidebar-arrow"
                    onClick={() => toggleDropdown(index)}
                  >
                    <FaCaretDown />
                  </div>
                </div>
                {activeDropdown === index && (
                  <div className="sidebar-dropdown">
                    {link.subLinks.map((subLink, subIndex) => (
                      <div
                        key={subIndex}
                        className="sidebar-dropdown-item-container"
                      >
                        <Link
                          to={subLink.url}
                          className="sidebar-dropdown-item"
                        >
                          {subLink.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/" className="alone-link-side">
              FIND AN OFFICE
              <div className="magn-btm"></div>
            </Link>
            <Link to="/" className="alone-link-btn">
              APPLY NOW <HiArrowLongRight className="right-arrow" />
            </Link>
          </div>
        </aside>
      )}
    </header>
  );
};

export default Navbar;