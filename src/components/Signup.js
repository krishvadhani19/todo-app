import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="flex justify-center bg-slate-900 text-white py-3 h-screen">
      <label className="bg-slate-800 mb-3 p-4 lg:w-2/3 w-full mx-6 rounded-lg h-[65%]">
        <div className="text-center text-5xl mb-4 font-bold text-white">
          Sign up
        </div>
        <input
          type="text"
          className="p-2 rounded-md mb-4 w-full bg-slate-600 text-white"
          placeholder="Enter Full Name"
          value={credentials.name}
          id="name"
          name="name"
          onChange={onChange}
          required
        />
        <input
          type="email"
          className="p-2 rounded-md mb-4 w-full bg-slate-600 text-white"
          placeholder="Enter Email"
          value={credentials.email}
          id="email"
          name="email"
          onChange={onChange}
          required
        />
        <input
          type="password"
          className="p-2 rounded-md mb-4 w-full bg-slate-600 text-white"
          placeholder="Enter Password"
          value={credentials.password}
          id="password"
          name="password"
          onChange={onChange}
          required
        />
        <input
          type="password"
          className="p-2 rounded-md mb-4 w-full bg-slate-600 text-white"
          placeholder="Confirm Password"
          value={credentials.cpassword}
          id="cpassword"
          name="cpassword"
          onChange={onChange}
          required
        />
        <div
          className="text-white hover:text-slate-900 hover:bg-sky-300 border-sky-500 hover:border-sky-300 border-2 rounded-md px-3 py-1 text-lg inline-block"
          onClick={handleSubmit}
          type="submit"
        >
          Submit
        </div>
      </label>
    </div>
  );
};

export default Signup;
