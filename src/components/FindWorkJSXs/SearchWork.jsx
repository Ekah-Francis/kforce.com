/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../../CSS/FindWorkCSS/SearchWork.css";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import FilterComponent from "./Filter";

const SearchJob = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPlaceholder, setDropdownPlaceholder] =
    useState("Type to search");
  const [inputValue, setInputValue] = useState("");
  const [searchTitle, setSearchTitle] = useState(""); // For job title/skills search
  const [searchLocation, setSearchLocation] = useState(""); // For location search
  const [isLoading, setIsLoading] = useState(true); // For loading screen
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768); // Check screen size

  // Listen for screen resize to update state
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Simulate loading time of 6 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleFocus = () => {
    setIsDropdownOpen(true);
    setDropdownPlaceholder("Type to search"); // Reset to "Type to search" when dropdown opens
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);

    // Change placeholder to "Loading..." once user starts typing
    if (e.target.value.length > 0) {
      setDropdownPlaceholder("Loading...");
    } else {
      setDropdownPlaceholder("Type to search"); // Reset if input is cleared
    }
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown visibility
    setDropdownPlaceholder("Type to search");
  };

  const handleSearch = () => {
    // Trigger search logic
    setSearchTitle(inputValue);
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <div className="contain-big">
      <div className="head">
        <div className="search-job-container">
          <div className="background">
            <div className="content">
              <h1 className="title">Search Jobs</h1>
              <div className="links">
                <a href="#" className="link">
                  Submit Your Resume
                </a>
                <span className="divider"></span>
                <a href="#" className="link">
                  Knowledge Center
                </a>
              </div>
            </div>
          </div>

          {/* Blue Background Section */}
          <div className="blue-bg-section">
            <div className="input-container">
              <input
                type="text"
                placeholder="Search jobs by title or skills"
                className="input-field"
                onChange={(e) => setSearchTitle(e.target.value)}
              />
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="City, State or ZIP"
                  className="input-field"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
                <span className="dropdown-arrow" onClick={handleDropdownClick}>
                  <FaCaretDown />
                </span>
                {isDropdownOpen && (
                  <div className="dropdown-content">{dropdownPlaceholder}</div>
                )}
              </div>
              {isLargeScreen ? (
                <FaSearch
                  className="search-icon-search"
                  onClick={handleSearch}
                />
              ) : (
                <button className="search-button" onClick={handleSearch}>
                  Search
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <FilterComponent
        searchTitle={searchTitle}
        searchLocation={searchLocation}
      />
    </div>
  );
};

export default SearchJob;
