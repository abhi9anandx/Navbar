import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import WebDevelopment from "./pages/webDevelopment";
import MobileDevelopment from "./pages/mobileDevelopment";
import "./app.css";

function App() {
  return (

      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web" element={<WebDevelopment />} />
          <Route path="/services/mobile" element={<MobileDevelopment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  
  );
}

export default App;