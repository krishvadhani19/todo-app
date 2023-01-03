import React, { useContext } from "react";
import taskContext from "context/tasks/taskContext";
import { useLocation, useNavigate, Link } from "react-router-dom";

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
      <div className="flex justify-between text-xl bg-dark-100  px-5 py-3 w-full">
        <div className="flex flex-row justify-between w-[70%]">
          {/* Logo */}
          <div className="font-extrabold mx-2">
            <a
              href="/"
              className="rounded-sm text-white hover:text-slate-900 font-head-primary text-3xl"
            >
              todoApp.
            </a>
          </div>

          {/* Home */}
          <div className="mx-2 font-medium">
            <a
              href="/"
              className={`hover:text-bright-blue align-middle ${
                location.pathname === "/"
                  ? "text-primary-blue"
                  : "text-dark-600"
              }`}
            >
              Home
            </a>
          </div>

          {/* About */}
          <div className="mx-2 font-medium">
            <a
              href="/about"
              className={`hover:text-bright-blue align-middle ${
                location.pathname === "/about"
                  ? "text-primary-blue"
                  : "text-dark-600"
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
            <div></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
