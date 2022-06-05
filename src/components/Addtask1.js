import React from "react";
import { useContext } from "react";
import taskContext from "../context/tasks/TaskContext";
import { useState } from "react";

const Addtask1 = () => {
  const context = useContext(taskContext);
  const { addTask } = context;

  const [task, setTask] = useState({ title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task.title, task.description);
    setTask({ title: "", description: "" });
  };

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-slate-900 p-2 flex justify-center">
      <label className="my-5 p-5 shadow-lg rounded-lg bg-slate-800 block mx-8 lg:mx-10 w-full lg:w-2/3">
        <div className="font-medium text-slate-300 text-2xl block mb-2">
          Title
        </div>
        <input
          type="email"
          className="block peer p-2 rounded-md mb-4 w-full"
          placeholder="you@example.com"
        />
        <div className="font-medium text-slate-300 text-2xl block mt-4 mb-2">
          Description
        </div>
        <input
          type="text"
          className="block peer p-2 rounded-md w-full"
          placeholder="Enter Description"
        />
      </label>
    </div>
  );
};

export default Addtask1;
