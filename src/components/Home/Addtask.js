import React from "react";
import { useContext, useState } from "react";
import taskContext from "context/tasks/taskContext";

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
    <div className="flex font-body-primary">
      <label className="block w-2/3">
        {/* Add Task */}
        <div className="text-white font-bold text-5xl my-2 text-center font-head-primary">
          Add Task
        </div>

        <div className="flex flex-col space-y-5 p-2">
          {/* Title */}
          <div className="bg-dark-200 rounded-xl p-4">
            <div className="input-label">Title</div>
            <input
              type="text"
              className="input-text"
              placeholder="Enter Title"
              id="title"
              name="title"
              onChange={onChange}
              minLength={5}
              value={task.title}
            />
          </div>

          {/* Text Area */}
          <div className="bg-dark-200 rounded-xl p-4">
            <div className="input-label">Description</div>
            <textarea
              type="text"
              className="input-text h-32 resize-none"
              id="description"
              name="description"
              placeholder="Enter Description"
              onChange={onChange}
              value={task.description}
              minLength={5}
            />
          </div>

          {/* Add Button */}
          <div
            className="button w-44 text-center"
            onClick={handleSubmit}
            type="submit"
          >
            ADD +
          </div>
        </div>
      </label>
    </div>
  );
};

export default Addtask;
