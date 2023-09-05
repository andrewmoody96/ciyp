import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Shows from "./components/Shows";
import Contact from "./components/Contact";
import About from "./components/About";
import Epk from "./components/Epk";

export default function App() {
  return (
    <Router className="overflow-x-hidden">
      <div className="h-[100vh] flex items-center justify-center">
        <div className="h-[75vh] w-[85vw] flex items-start justify-center">
          <Routes className="overflow-y-auto">
            <Route path="/" element={<Home />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/epk" element={<Epk />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
