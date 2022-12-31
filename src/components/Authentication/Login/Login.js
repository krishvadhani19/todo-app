import React from "react";
import LeftLogin from "components/Authentication/Login/LeftLogin";
import RightLogin from "components/Authentication/Login/RightLogin";

const Login = () => {
  return (
    <div className="flex flex-row">
      {/* Left Side */}
      <div className="flex bg-dark-100 text-white py-3 h-screen w-[55%]">
        <LeftLogin />
      </div>

      {/* Right Side */}
      <div className="w-[45%] h-full relative">
        <RightLogin />
      </div>
    </div>
  );
};

export default Login;
