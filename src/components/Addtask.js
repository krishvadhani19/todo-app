import React from "react";
// import "../css/Addtask.css";
import { useContext, useState } from "react";
import taskContext from "../context/tasks/TaskContext";

const Addtask = () => {
  const context = useContext(taskContext);
  const { mode, addTask } = context;

  const [task, setTask] = useState({ task: "", description: "" });

  const handleSubmit = (e) => { 
    e.preventDefault();
    addTask(task.title, task.description);
    setTask({ title: "", description: "" });
    console.log(task.title);
  };

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <div
        className={`my-5`}
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
              value={task.title}
              minLength={5}
              required
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
              value={task.description}
              minLength={5}
              required
            />
          </div>
          <button
            // disabled={task.title.length < 5 || task.description.length < 5}
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addtask;
