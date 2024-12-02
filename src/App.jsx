/* eslint-disable no-undef */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/LandingPageJSXs/Navbar";
import Footer from "./components/LandingPageJSXs/Footer";
import FindWork from "./components/FindWorkJSXs/FindWork";
import LandingPage from "./components/LandingPageJSXs/LandingPage";
import SearchJob from "./components/FindWorkJSXs/SearchWork";
import JobDetails from "./components/FindWorkJSXs/JobDetails";
import JobsList from "./components/FindWorkJSXs/JobsList";
import jobs from "./data/jobs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/find-work" element={<FindWork />} />
        <Route path="/search-jobs" element={<SearchJob />} />
        <Route path="/job" element={<JobsList jobs={jobs} />} />
        <Route path="/job/:id" element={<JobDetails jobs={jobs} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
