import React from "react";

// importing files
import Navbar from "components/Authentication/Navbar";
import RightSignup from "components/Authentication/Signup/RightSignup";
import LeftSignup from "components/Authentication/Signup/LeftSignup";

const Signup = () => {
  return (
    <div className="relative bg-dark-100 font-body-primary">
      {/* Navbar */}
      <div className="fixed w-[55%]">
        <Navbar />
      </div>

      {/* Signup */}
      <div className="flex flex-row">
        {/* Left Side */}
        <div className="flex text-white py-3 h-screen w-[55%] mt-24">
          <LeftSignup />
        </div>

        {/* Right Side */}
        <div className="w-[45%] h-full relative">
          <RightSignup />
        </div>
      </div>
    </div>
  );
};

export default Signup;
