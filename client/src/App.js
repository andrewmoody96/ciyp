import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import Header from "./components/Reusable/Header";
import Footer from "./components/Reusable/Footer";
import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";
import Music from "./components/Pages/Music";
import BackToLife from "./components/Pages/Music/backtolife/More";
import Melting from "./components/Pages/Music/melting/More";
import DieTrying from "./components/Pages/Music/dietrying/More";

export default function App() {
  return (
    <Router className="overflow-x-hidden">
      <Header />
      <div className="h-[100vh] flex items-center justify-center">
        <div className="h-[75vh] w-[85vw] flex justify-center">
          <Routes className="overflow-y-auto">
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/backtolife" element={<BackToLife />} />
            <Route path="/melting" element={<Melting />} />
            <Route path="/dietrying" element={<DieTrying />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
