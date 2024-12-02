import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Footer from "./components/Reusable/Footer";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";
import Epk from "./components/Pages/Epk";
import NewMusic from "./components/Pages/NewMusic";

export default function App() {
  return (
    <Router className="overflow-x-hidden">
      <div className="h-[100vh] flex items-center justify-center">
        <div className="h-[75vh] w-[85vw] flex justify-center">
          <Routes className="overflow-y-auto">
            <Route path="/" element={<Home />} />
            <Route path="/epk" element={<Epk />} />
            <Route path="/newmusic" element={<NewMusic />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
