/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "../../CSS/FindWorkCSS/HeroSection.css";

const HeroSection = () => {
  return (
    <div id="site-content" className="page-job-seeker">
      <section className="page-hero-image" role="region">
        <article className="hero-content" role="article">
          <strong>Helping You Find Tomorrow's Opportunities, Today!</strong>
          <p>&nbsp;</p>
          <p style={{ textAlign: "center", marginBottom: "6rem" }}>
            <span style={{ fontSize: "14pt" }}>
              <a
                rel="noopener"
                href="/find-work/search-jobs/"
                target="_blank"
                title="Search Jobs"
                className="btn-filled-white-lochmara"
              >
                Search Jobs
              </a>
              &nbsp; &nbsp;
              <a
                rel="noopener"
                href="/find-work/submit-your-resume/"
                target="_blank"
                title="Submit Your Resume"
                className="btn-filled-white-lochmara"
              >
                Submit Resume
              </a>
            </span>
          </p>
        </article>
      </section>
    </div>
  );
};

export default HeroSection;
