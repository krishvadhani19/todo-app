import React from "react";
import Addtask from "./Addtask";
import Tasks from "./Tasks";

const Home = () => {
  return (
    <div className="h-screen bg-slate-900">
      <Addtask />
      <Tasks />
    </div>
  );
};

export default Home;
