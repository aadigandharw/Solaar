import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Component/Header/Header";

// Pages (create these)
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Features from "./Component/Features/Features";
import Explore from "./Component/explore/explore";
import Contact from "./Component/Contact/Contact";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router>
  );
}

export default App;