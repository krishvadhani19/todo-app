import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
      <div className="flex justify-center bg-slate-900 text-white py-3 h-screen">
        <label className=" bg-slate-800 mb-3 p-4 lg:w-2/3 w-full mx-6 rounded-lg h-[42%]">
          <div className="text-center text-5xl mb-4 font-bold"> Login </div>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            className="p-2 rounded-md mb-4 w-full bg-slate-600 text-white"
            placeholder="you@example.com"
            onChange={onChange}
            minLength={5}
          />
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            className="p-2 rounded-md mb-4 w-full bg-slate-600 text-white"
            placeholder="Enter Password"
            onChange={onChange}
            minLength={5}
          />
          <div
            className="text-white hover:text-slate-900 hover:bg-sky-300 border-sky-500 hover:border-sky-300 border-2 rounded-md px-3 py-1 text-lg text-center inline-block"
            onClick={handleSubmit}
            type="submit"
          >
            Submit
          </div>
        </label>
      </div>
    </>
  );
};

export default Login;
