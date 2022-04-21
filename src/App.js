import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Alert from "./components/Alert";

function App() {
  const activeRoute = () => {};
  return (
    <>
      <Router>
        {/* Navbar */}
        <Navbar />

        {/* Alert */}
        <Alert/>

        <Routes>
          {/* Home */}
          <Route exact path="/" element={<Home />}></Route>

          {/* About */}
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
