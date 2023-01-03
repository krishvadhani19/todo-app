import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LightMailIcon from "components/icons/Light/mail";
import BoldPasswordIcon from "components/icons/Bold/password";
import LightContactIcon from "components/icons/Light/contact";

const LeftSignup = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      setCredentials({ email: "", password: "" });
      localStorage.setItem("token", json.authToken);
      navigate("/");
    } else {
      navigate("/login");
      alert("Invalid Credentials");
      setCredentials({ email: "", password: "" });
    }
  };

  const navigate = useNavigate();
  return (
    <label className="flex flex-col space-y-6 p-4 w-full mx-16 rounded-lg ">
      {/* Tagline */}
      <div className="flex flex-col space-y-2">
        {/*  */}
        <div className="text-base text-dark-600 font-bold">START FOR FREE</div>

        {/* Login Label */}
        <div className="flex flex-row space-x-1">
          <div className="text-5xl font-bold font-head-primary">
            Create New Account
          </div>
          <span className="bg-primary-blue w-3 h-3 mt-8 rounded-lg"></span>
        </div>

        {/* Already Member */}
        <div className="flex space-x-2">
          <div className="text-lg text-dark-600 font-semibold">
            Already Member?
          </div>
          <a href="/login" className="text-lg text-primary-blue font-semibold">
            Login
          </a>
        </div>
      </div>

      {/* First Name Last Name */}
      <div className="flex space-x-3">
        {/* First Name */}
        <div className="flex justify-between bg-dark-200 p-3 rounded-3xl space-y-0 w-[50%]">
          {/* Input */}
          <div className="flex flex-col w-full px-1">
            {/* Label */}
            <div className="input-label">First Name</div>

            <input
              type="text"
              id="fname"
              name="fname"
              value={credentials.fname}
              className="input-text"
              placeholder="Yash"
              onChange={onChange}
              minLength={5}
              autocomplete="do-not-autofill"
            />
          </div>

          {/* Mail Icon */}
          <div className="my-auto">
            <LightContactIcon size="30" color="#b2b2b2" />
          </div>
        </div>

        {/* Last Name */}
        <div className="flex justify-between bg-dark-200 p-3 rounded-3xl space-y-0 w-[50%]">
          {/* Input */}
          <div className="flex flex-col w-full px-1">
            {/* Label */}
            <div className="input-label">Last Name</div>

            <input
              type="text"
              id="lname"
              name="lname"
              value={credentials.lname}
              className="input-text"
              placeholder="Sharma"
              onChange={onChange}
              minLength={5}
              autocomplete="do-not-autofill"
            />
          </div>

          {/* Mail Icon */}
          <div className="my-auto">
            <LightContactIcon size="30" color="#b2b2b2" />
          </div>
        </div>
      </div>

      {/* Input for email */}
      <div className="flex justify-between bg-dark-200 p-3 rounded-3xl space-y-0">
        {/* Input */}
        <div className="flex flex-col w-full px-1">
          {/* Label */}
          <div className="input-label">Email</div>

          <input
            type="text"
            id="email"
            name="email"
            value={credentials.email}
            className="input-text"
            placeholder="you@example.com"
            onChange={onChange}
            minLength={5}
            autocomplete="do-not-autofill"
          />
        </div>

        {/* Mail Icon */}
        <div className="my-auto">
          <LightMailIcon size="30" color="#b2b2b2" />
        </div>
      </div>

      {/* Input for email */}
      <div className="flex justify-between bg-dark-200 p-3 rounded-3xl space-y-0">
        {/* Input */}
        <div className="flex flex-col w-full px-1">
          {/* Label */}
          <div className="input-label">Password</div>

          {/* Input for Password */}
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            className="input-text"
            placeholder="Enter Password"
            onChange={onChange}
            minLength={5}
            autocomplete="do-not-autofill"
          ></input>
        </div>

        {/* Mail Icon */}
        <div className="my-auto">
          <BoldPasswordIcon size="30" color="#b2b2b2" />
        </div>
      </div>

      {/* Submit Button */}
      <div
        className="button text-center w-[30%]"
        onClick={handleSubmit}
        type="submit"
      >
        Signup
      </div>
    </label>
  );
};

export default LeftSignup;
