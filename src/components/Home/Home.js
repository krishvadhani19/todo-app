import React from "react";
import Navbar from "components/Utils/Navbar";

const Home = () => {
  return (
    <div className="h-screen bg-dark-100 font-body-primary p-3">
      {/* Navbar */}
      <div className="w-[12%] bg-dark-200 rounded-xl h-full my-auto">
        <Navbar />
      </div>

      {/* Add Task & All Tasks*/}
      <div>
        {/* Add Task */}
        <div></div>

        {/* Tasks */}
        <div></div>
      </div>
    </div>
  );
};

export default Home;
