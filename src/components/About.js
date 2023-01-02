import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const About = () => {
  let navigate = useNavigate();
  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/login");
  //   } else {
  //     return <div className="container">About</div>;
  //   }
  // }, []);
};

export default About;
