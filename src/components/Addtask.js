import React from "react";
import "../css/Addtask.css";
import { useContext, useState } from "react";
import taskContext from "../context/tasks/TaskContext";

const Addtask = () => {
  const context = useContext(taskContext);
  const { mode, addTask } = context;
  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const [task, setTask] = useState({ task: "", description: "" });

  const handleClick = () => {
    addTask(task.title, task.description);
    setTask({ title: "", description: "" });
  };
  return (
    <div
      className="container my-5 Addtask"
      style={{
        // backgroundColor: "#212529",
        borderRadius: "5px",
        padding: "20px",
        boxShadow: "2px 2px 10px",
      }}
    >
      <form>
        <div className="mb-3">
          <label
            htmlFor="title"
            className="form-label"
            style={{ fontSize: "19px" }}
          >
            <strong>Title</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="description"
            className="form-label"
            style={{ fontSize: "19px" }}
          >
            <strong>Description</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Addtask;
