import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Footer from "./components/Reusable/Footer";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";
// import Music from "./components/Pages/Music";

export default function App() {
  return (
    <Router className="overflow-x-hidden">
      <div className="h-[100vh] flex items-center justify-center">
        <div className="h-[75vh] w-[85vw] flex justify-center">
          <Routes className="overflow-y-auto">
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<NotFound />} />
            <Route path="/backtolife" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
