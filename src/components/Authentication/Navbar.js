import React from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();

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
      </div>
    </>
  );
};

export default Navbar;
