/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/LandingPageCSS/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted className="video-element">
          <source src="/kforce-vid.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="hero-video-gradient"></div>

      {/* Dark Mask */}
      <div className="hero-image-mask"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <article className="content-container">
          <span>
            Let&apos;s <br />
            transform <br /> business,
            <br /> together
          </span>
          <br />
          <br />
          <p>
            <a
              href="/about"
              title="Together Toward Tomorrow"
              className="btn-filled"
            >
              Explore Trends
            </a>
          </p>
        </article>
      </div>
    </div>
  );
};

export default HeroSection;
