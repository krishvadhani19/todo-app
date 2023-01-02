import React from "react";

// importing files
import LeftLogin from "components/Authentication/Login/LeftLogin";
import RightLogin from "components/Authentication/Login/RightLogin";
import Navbar from "components/Authentication/Navbar";

const Login = () => {
  return (
    <div className="relative bg-dark-100 font-body-primary">
      {/* Navabr */}
      <div className="fixed w-[55%]">
        <Navbar />
      </div>

      {/* Login */}
      <div className="flex flex-row">
        {/* Left Side */}
        <div className="flex text-white py-3 h-screen w-[55%] mt-24">
          <LeftLogin />
        </div>

        {/* Right Side */}
        <div className="w-[45%] h-full relative">
          <RightLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
