import React from "react";
import Navbar from "components/Utils/Navbar";
import Addtask from "components/Home/Addtask";
import Tasks from "components/Tasks/Tasks";

const Home = () => {
  return (
    <div className="h-screen bg-dark-100 font-body-primary p-3 flex space-x-6 w-screen">
      {/* Navbar */}
      <div className="w-[10%] bg-dark-200 rounded-xl h-full my-auto">
        <Navbar />
      </div>

      {/* Add Task & All Tasks*/}
      <div className="w-[88%] flex flex-col space-y-4">
        {/* Add Task */}
        <Addtask />

        {/* Tasks */}
        <div>
          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default Home;
