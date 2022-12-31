import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LeftLogin = () => {
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
    <>
      <label className="flex flex-col space-y-6 p-4 w-full mx-16 rounded-lg ">
        {/* Tagline */}
        <div className="flex flex-col space-y-2">
          {/*  */}
          <div className="text-base text-dark-600 font-bold">
            START FOR FREE
          </div>

          {/* Login Label */}
          <div className="flex flex-row space-x-1">
            <div className="text-5xl font-bold">Member Login</div>
            <span className="bg-primary-blue w-3 h-3 mt-8 rounded-lg"></span>
          </div>

          {/* ALready Member */}
          <div className="flex space-x-2">
            <div className="text-lg text-dark-600 font-semibold">
              Create New Account?
            </div>
            <a
              href="/signup"
              className="text-lg text-primary-blue font-semibold"
            >
              Signup
            </a>
          </div>
        </div>

        {/* Input for email */}
        <input
          type="email"
          id="email"
          name="email"
          value={credentials.email}
          className="p-2 rounded-md w-full bg-slate-600 text-white"
          placeholder="you@example.com"
          onChange={onChange}
          minLength={5}
        ></input>

        {/* Input for Login */}
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          className="p-2 rounded-md w-full bg-slate-600 text-white"
          placeholder="Enter Password"
          onChange={onChange}
          minLength={5}
        ></input>

        {/* Submit Button */}
        <div
          className="text-white hover:text-slate-900 hover:bg-sky-300 border-primary-blue hover:border-sky-300 border-2 rounded-md px-3 py-1 text-lg text-center inline-block"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </div>
      </label>
    </>
  );
};

export default LeftLogin;
