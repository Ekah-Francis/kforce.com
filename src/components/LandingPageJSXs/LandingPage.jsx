/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "./HeroSection";
import SolutionSection from "./SolutionSection";
import ExpertiseSection from "./ExpertiseSection";
import AboutComponent from "./AboutComponent";
import CardSlider from "./CardSlider";
import InsightsComponent from "./InsightsComponent";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <SolutionSection />
      <ExpertiseSection />
      <AboutComponent />
      <CardSlider />
      <InsightsComponent />
    </div>
  );
};

export default LandingPage;
