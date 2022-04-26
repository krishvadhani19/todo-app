import React from "react";
import "../css/Addtask.css";
import { useContext } from "react";
import taskContext from "../context/tasks/TaskContext";

const Addtask = () => {
  const context = useContext(taskContext);
  const { mode } = context;
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
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="title" name="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Addtask;
