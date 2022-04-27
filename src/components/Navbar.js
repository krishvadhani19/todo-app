import React from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import Mode from "./Mode";
import taskContext from "../context/tasks/TaskContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const context = useContext(taskContext);
  const { mode } = context;
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}
        style={{ fontSize: "20px" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <strong>todoApp</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  href="/about"
                >
                  About
                </a>
              </li>
            </ul>
          </div>
          <Mode />
          <form className="d-flex">
            <Link className="btn btn-primary ms-4" to="/login">
              Login
            </Link>
            <Link className="btn btn-primary mx-2" to="/signup">
              Signup
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
