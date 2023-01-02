import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "components/Utils/Navbar";
import RightSignup from "components/Authentication/Signup/RightSignup";
import LeftSignup from "components/Authentication/Signup/LeftSignup";

const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/auth/createnewuser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    console.log(json);
    if (json.success) {
      setCredentials({ name: "", email: "", password: "", cpassword: "" });
      navigate("/");
      localStorage.setItem("token", json.authToken);
    } else {
      navigate("/signup");
      setCredentials({ name: "", email: "", password: "", cpassword: "" });
    }
  };
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
