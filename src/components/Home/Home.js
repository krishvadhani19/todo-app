import React from "react";
import Navbar from "components/Utils/Navbar";
import Tasks from "components/Tasks/Tasks";

const Home = () => {
  return (
    <div className="min-h-screen bg-dark-100 font-body-primary p-3 flex space-x-6 relative">
      {/* Navbar */}
      <div className="w-[10%]">
        <Navbar />
      </div>

      {/* Add Task & All Tasks*/}
      <div className="w-[88%] flex flex-col space-y-4">
        <Tasks />
      </div>
    </div>
  );
};

export default Home;
