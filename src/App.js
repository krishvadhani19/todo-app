import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Alert from "./components/Alert";
import TaskState from "./context/tasks/TaskState";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <TaskState>
        <Router>
          {/* Navbar */}
          <Navbar />

          {/* Alert */}
          {/* <Alert/> */}

          <Routes>
            {/* Home */}
            <Route exact path="/" element={<Home />}></Route>

            {/* About */}
            <Route exact path="/about" element={<About />}></Route>
            {/* Login */}
            <Route exact path="/login" element={<Login />}></Route>
            {/* Signup */}
            <Route exact path="/signup" element={<Signup />}></Route>
          </Routes>
          {/* Footer */}
          <Footer />
        </Router>
      </TaskState>
    </>
  );
}

export default App;
