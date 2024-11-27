import "./App.css";
import AboutComponent from "./components/AboutComponent";
import CardSlider from "./components/CardSlider";
import ExpertiseSection from "./components/ExpertiseSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SolutionSection from "./components/SolutionSection";
import InsightsComponent from "./components/InsightsComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SolutionSection />
      <ExpertiseSection />
      <AboutComponent />
      <CardSlider />
      <InsightsComponent />
      <Footer />
    </>
  );
}

export default App;
