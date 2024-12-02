/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/LandingPageCSS/Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-blue">
        <div className="container">
          <div className="logo-content">
            <a href="/">
              <img
                src="https://kforcewebeast.azureedge.net/media/407208/kforce_sm_white_1000px.png"
                alt="Kforce logo"
                className="footer-logo"
              />
            </a>

            <div>
              <p className="about-text">
                Kforce is a solutions firm specializing in technology, finance
                and accounting, and professional staffing services. Our
                KNOWLEDGEforce® empowers industry-leading companies to achieve
                their digital transformation goals. We curate teams of technical
                experts who build solutions custom-tailored to each client’s
                needs. These scalable, flexible outcomes are shaped by deep
                market knowledge, thought leadership and our multi-industry
                expertise.
              </p>
              <p className="about-text">
                Our integrated approach is rooted in 60 years of proven success
                deploying highly skilled professionals on a temporary and
                direct-hire basis. Each year, more than 20,000 talented experts
                work with a majority of the Fortune 500. Together, we deliver
                Great Results Through Strategic Partnership and Knowledge
                Sharing®.
              </p>
            </div>
          </div>
          <hr className="divider-footer" />
          <div className="link-table">
            <div className="table-column">
              <h3>
                <a href="/find-work/">Find Work</a>
              </h3>
              <ul>
                <li>
                  <a href="/find-work/search-jobs/#/">Search Jobs</a>
                </li>
                <li>
                  <a href="/submit-resume/">Submit Your Resume</a>
                </li>
                <li>
                  <a href="https://www.kforce.com/kforceconnect-referral-app/">
                    KFORCEconnect
                  </a>
                </li>
                <li>
                  <a href="/find-work/visa-sponsorship-solutions/">
                    Visa Sponsorship
                  </a>
                </li>
              </ul>
            </div>
            <div className="table-column">
              <h3>
                <a href="/solutions/">Solutions</a>
              </h3>
              <ul>
                <li>
                  <a href="/solutions/talent-solutions/">Talent Solutions</a>
                </li>
                <li>
                  <a href="/solutions/team-solutions/">Team Solutions</a>
                </li>
                <li>
                  <a href="/solutions/project-solutions/">Project Solutions</a>
                </li>
                <li>
                  <a href="/solutions/international-talent-solutions/">
                    International Talent Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div className="table-column">
              <h3>
                <a href="/about/">About</a>
              </h3>
              <ul>
                <li>
                  <a href="/about/executive-leadership/">
                    Executive Leadership
                  </a>
                </li>
                <li>
                  <a href="/about/sustainability/">Sustainability</a>
                </li>
                <li>
                  <a href="/about/careers/">Careers at Kforce</a>
                </li>
                <li>
                  <a href="/about/newsroom/">Newsroom</a>
                </li>
                <li>
                  <a href="/about/awards/">Awards</a>
                </li>
              </ul>
            </div>
            <div className="table-column">
              <ul className="bigger-link">
                <li>
                  <a href="/knowledge-center/">Knowledge Center</a>
                </li>
                <li>
                  <a href="/investor-relations/">Investor Relations</a>
                </li>
                <li>
                  <a href="/site-map/">Site Map</a>
                </li>
                <li>
                  <a href="/contact-us/">Contact Us</a>
                </li>
                <li>
                  <a href="/accessibility-center/">Accessibility Center</a>
                </li>
                <li>
                  <a href="/fraud-alert/">Do You Suspect Fraud?</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>
          ©2024 Kforce Inc. All Rights Reserved. Kforce is proud to be an Equal
          Opportunity/Affirmative Action Employer.
        </p>
        <div className="footer-socials">
          <Link to="/signin" className="sign-in">
            <FaFacebookF className="footer-social-icons" />
          </Link>
          <Link to="/signin" className="sign-in">
            <FaXTwitter className="footer-social-icons" />
          </Link>
          <Link to="/signin" className="sign-in">
            <FaLinkedinIn className="footer-social-icons" />
          </Link>
          <Link to="/signin" className="sign-in">
            <TiSocialInstagram className="footer-social-icons" />
          </Link>
        </div>
        <p className="last">
          <a
            href="https://kforcewebeast.azureedge.net/media/403128/affirmative-action-statement-of-policy_04-01-2019.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kforce Affirmative Action Statement
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://kforcewebeast.azureedge.net/media/408181/ier-poster-final.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Federal IER Poster
          </a>
          &nbsp;|&nbsp;
          <a href="/terms-of-use/" target="_blank" rel="noopener noreferrer">
            Terms of Use
          </a>
          &nbsp;|&nbsp;
          <a href="/fraud-alert/" target="_blank" rel="noopener noreferrer">
            Fraud Alert
          </a>
          &nbsp;|&nbsp;
          <a href="/privacy-policy/" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://privacyportal.onetrust.com/webform/3d9b6fd8-e40c-4c8e-a4c8-6d5dd13d34ed/cf5d6778-3af7-4def-bfdc-87e17eac2865"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Rights
          </a>
          &nbsp;|&nbsp;
          <a
            href="https://health.aetna.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transparency in Coverage
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
