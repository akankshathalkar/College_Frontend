import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/home";
import Contact from "./pages/Contact";

import MissionVision from "./pages/about/MissionVision";

import ELearning from "./pages/academics/e-learning";
import Results from "./pages/academics/results";
import Examination from "./pages/academics/examination";
import AcademicCalendar from "./pages/academics/academic-calendar";
import AcademicHoliday from "./pages/academics/academic-holiday";
import AcademicCommittee from "./pages/academics/academic-committee";
import Administration from "./pages/academics/administration";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* About */}
        <Route
          path="/about/mission-vision"
          element={<MissionVision />}
        />

        {/* Academics */}
        <Route
          path="/academics/e-learning"
          element={<ELearning />}
        />

        <Route
          path="/academics/results"
          element={<Results />}
        />

        <Route
          path="/academics/examination"
          element={<Examination />}
        />

        <Route
          path="/academics/academic-calendar"
          element={<AcademicCalendar />}
        />

        <Route
          path="/academics/academic-holiday"
          element={<AcademicHoliday />}
        />

        <Route
          path="/academics/academic-committee"
          element={<AcademicCommittee />}
        />

        <Route
          path="/academics/administration"
          element={<Administration />}
        />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;