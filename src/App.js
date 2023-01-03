import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import Home from "components/Home/Home";
import TaskState from "context/tasks/TaskState";
import Login from "components/Authentication/Login/Login";
import Signup from "components/Authentication/Signup/Signup";

function App() {
  return (
    <>
      <TaskState>
        <Router>
          <Routes>
            {/* Home */}
            <Route exact path="/" element={<Home />}></Route>
            {/* Login */}
            <Route exact path="/login" element={<Login />}></Route>
            {/* Signup */}
            <Route exact path="/signup" element={<Signup />}></Route>
          </Routes>
        </Router>
      </TaskState>
    </>
  );
}

export default App;
