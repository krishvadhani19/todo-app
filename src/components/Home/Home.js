import React from "react";
import Navbar from "components/Utils/Navbar";
import Addtask from "components/Home/Addtask";

const Home = () => {
  return (
    <div className="h-screen bg-dark-100 font-body-primary p-3 flex space-x-6">
      {/* Navbar */}
      <div className="w-[12%] bg-dark-200 rounded-xl h-full my-auto">
        <Navbar />
      </div>

      {/* Add Task & All Tasks*/}
      <div className="w-[88%] flex flex-col">
        {/* Add Task */}
        <Addtask />

        {/* Tasks */}
        <div></div>
      </div>
    </div>
  );
};

export default Home;
