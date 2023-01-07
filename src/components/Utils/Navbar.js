import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

// Files
import LightHomeIcon from "components/icons/Light/home";
import LightNotificationIcon from "components/icons/Light/notification";
import BoldNotificationIcon from "components/icons/Bold/notification";
import BoldHomeIcon from "components/icons/Bold/home";

const Navbar = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="flex flex-col bg-dark-200 rounded-xl justify-between p-3 h-[95%] fixed my-auto">
      {/* logo */}
      <Link
        to="/"
        className="mx-auto text-white font-head-primary text-3xl p-2 cursor-pointer"
      >
        todoApp.
      </Link>

      {/* routes */}
      <div className="mx-auto flex flex-col space-y-4">
        {/* Home */}
        {location.pathname === "/" ? (
          <Link className="flex flex-row space-x-2" to="/">
            {/* icon */}
            <div className="">
              <BoldHomeIcon size="25" color="#ffffff" />
            </div>
            <div className="active-route my-auto">Home</div>
          </Link>
        ) : (
          <Link className="flex flex-row space-x-2" to="/">
            {/* icon */}
            <div className="">
              <LightHomeIcon size="25" color="#64748B" />
            </div>
            <div className="inactive-route my-auto">Home</div>
          </Link>
        )}

        {/* Notification */}
        {location.pathname === "/notification" ? (
          <Link className="flex flex-row space-x-2" to="/notification">
            {/* icon */}
            <div className="">
              <BoldNotificationIcon size="25" color="#ffffff" />
            </div>

            {/* Route */}
            <div className="active-route my-auto">Notification</div>
          </Link>
        ) : (
          <Link className="flex flex-row space-x-2" to="/notification">
            {/* icon */}
            <div className="">
              <LightNotificationIcon size="25" color="#64748B" />
            </div>

            {/* Route */}
            <div className="inactive-route my-auto">Notification</div>
          </Link>
        )}
      </div>

      {/* Logout */}
      <div className="button mx-auto">
        {localStorage.getItem("token") ? (
          <Link to="/login" onClick={handleLogout} className="hover:text-white">
            Logout
          </Link>
        ) : (
          <Link to="/login" onClick={handleLogout}>
            Logout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
