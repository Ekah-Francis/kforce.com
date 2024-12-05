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

// Import the JobProvider from the context
import { JobProvider } from "./context/JobContext";
import SubmitResume from "./components/FindWorkJSXs/submitResume";

function App() {
  return (
    <JobProvider>
      {" "}
      {/* Wrap the application in the JobProvider */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/find-work" element={<FindWork />} />
          <Route path="/search-jobs" element={<SearchJob />} />
          <Route path="/job" element={<JobsList jobs={jobs} />} />
          <Route
            path="/submit-resume/:jobId/:jobTitle"
            element={<SubmitResume />}
          />
          <Route path="/submit-resume" element={<SubmitResume />} />
          <Route path="/job/:id" element={<JobDetails jobs={jobs} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </JobProvider>
  );
}

export default App;
