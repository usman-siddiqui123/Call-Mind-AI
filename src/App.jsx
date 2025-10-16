import React from "react";
// Hum HashRouter ko hi "Router" naam de rahe hain,
// taaki neeche aapke component mein woh define ho jaaye.
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Header from "./components/header"; 
import HomePage from "./pages/home";
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"


function App() {
  return (
    // Ab Router define ho chuka hai
    <Router>
      {/* Header component Routes ke BAHAR hai (Fixed Layout) */}
      <Header /> 

      <div> 
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/about" element={<AboutPage />} /> 
          <Route path="/contact" element={<ContactPage />} />

          {/* 404 Not Found Page */}
          <Route path="*" element={<h1 className="text-center mt-10 text-xl">404 Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
