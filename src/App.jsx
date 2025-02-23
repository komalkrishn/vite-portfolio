import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Preloader from "../src/components/Preloader";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import "./App.css";
import "./style.css";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import About from "./components/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/contact/Contact";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
       </div>
    </Router>
  );
}

export default App;
