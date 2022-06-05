import React from "react";
import { useContext } from "react";
import taskContext from "../context/tasks/TaskContext";
import { useState } from "react";

const Addtask = () => {
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
      <label className="my-3 p-3 shadow-lg rounded-lg bg-slate-800 block mx-6 w-full lg:w-2/3">
        <div className="text-white font-bold text-5xl mb-4 text-center">
          Add Task
        </div>
        <input
          type="text"
          className=" p-2 rounded-md mb-4 w-full bg-slate-600 text-white"
          placeholder="Enter Title"
          id="title"
          name="title"
          onChange={onChange}
          minLength={5}
          value={task.title}
        />
        <textarea
          type="text"
          className="p-2 rounded-md w-full h-36 bg-slate-600 text-white 
          resize-none mb-4"
          id="description"
          name="description"
          placeholder="Enter Description"
          onChange={onChange}
          value={task.description}
          minLength={5}
        />
        <div
          className="text-white hover:text-slate-900 hover:bg-sky-300 border-sky-500 hover:border-sky-300 mx-2 border-2 rounded-md px-3 py-1block text-lg inline-block "
          onClick={handleSubmit}
          type="submit"
        >
          Add Task
        </div>
      </label>
    </div>
  );
};

export default Addtask;
