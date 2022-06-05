import React from "react";
import taskContext from "../context/tasks/TaskContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  let location = useLocation();
  const context = useContext(taskContext);
  const { mode } = context;
  return (
    <>
      <div className="flex text-xl bg-slate-900  px-5 py-3 justify-between">
        <div className="flex flex-col lg:flex-row ">
          <div className="font-extrabold mx-2">
            <a
              href="/"
              className="rounded-sm bg-gradient-to-r from-sky-300 via-fuchsia-300 to-sky-300 align-middle hover:text-slate-900"
            >
              todoApp
            </a>
          </div>
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
        <div className="">
          {localStorage.getItem("token") ? (
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
            <div className="flex font-normal">
              <Link
                to="/login"
                className="text-sky-500 hover:text-slate-900 hover:bg-sky-300 border-sky-500 hover:border-sky-300 mx-2 border-2 rounded-md px-3 pb-1"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sky-500 hover:text-slate-900 hover:bg-sky-300 border-sky-500 hover:border-sky-300 mx-2 border-2 rounded-md px-3 pb-1 "
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
