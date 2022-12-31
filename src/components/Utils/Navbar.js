import React, { useContext } from "react";
import taskContext from "../../context/tasks/taskContext";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  let location = useLocation();
  const context = useContext(taskContext);
  const {} = context;
  return (
    <>
      <div className="flex text-xl bg-dark-100  px-5 py-3 justify-between w-full">
        <div className="flex flex-col lg:flex-row ">
          {/* Logo */}
          <div className="font-extrabold mx-2">
            <a
              href="/"
              className="rounded-sm text-white align-middle hover:text-slate-900"
            >
              todoApp
            </a>
          </div>

          {/* Home */}
          <div className="mx-2 font-medium">
            <a
              href="/"
              className={`hover:text-sky-300 align-middle ${
                location.pathname === "/" ? "text-sky-300" : "text-sky-600"
              }`}
            >
              Home
            </a>
          </div>

          {/* About */}
          <div className="mx-2 font-medium">
            <a
              href="/about"
              className={`hover:text-sky-300 align-middle ${
                location.pathname === "/about" ? "text-sky-300" : "text-sky-600"
              }`}
            >
              About
            </a>
          </div>
        </div>

        {/* Login & Logout */}
        <div className="">
          {localStorage.getItem("token") ? (
            // Logout
            <div className="flex font-medium">
              <Link
                to="/login"
                onClick={handleLogout}
                className="text-sky-500 hover:text-slate-900 hover:bg-sky-300 border-sky-500 hover:border-sky-300 mx-2 border-2 rounded-md px-3 pb-1 "
              >
                Logout
              </Link>
            </div>
          ) : (
            // Login & Sign Up
            <div className="flex font-normal">
              <Link
                to="/login"
                className="text-white hover:text-slate-900 hover:bg-sky-300 border-sky-500 hover:border-sky-300 mx-2 border-2 rounded-md px-3 pb-1"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white hover:text-slate-900 hover:bg-sky-300 border-sky-500 hover:border-sky-300 mx-2 border-2 rounded-md px-3 pb-1 "
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
