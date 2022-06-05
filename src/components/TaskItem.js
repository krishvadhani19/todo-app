import React from "react";
import taskContext from "../context/tasks/TaskContext";
import { useContext } from "react";

const TaskItem = (props) => {
  const context = useContext(taskContext);
  const { deleteTask } = context;
  const { task, refFunc } = props;
  return (
    <div className={`col-md-3`}>
      <div
        className="card my-3 d-flex"
        style={{
          borderRadius: "5px",
          boxShadow: "2px 2px 10px",
          width: "18rem",
          color: "white",
          backgroundColor: "#212529",
        }}
      >
        <div
          className="card-body d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <h5
            className="card-title"
            style={{ fontSize: "25px", width: "190px" }}
          >
            {task.title}
          </h5>
          <div style={{ cursor: "pointer" }}>
            <i
              className="far fa-trash-alt mx-2 my-2"
              onClick={() => {
                deleteTask(task._id, task.title, task.description);
              }}
            ></i>
            <i
              className="fa-solid fa-pen mx-2 my-2"
              onClick={() => {
                refFunc(task);
              }}
            ></i>
          </div>
        </div>
        <p className="card-text" style={{ padding: "18px", fontSize: "20px" }}>
          {task.description}
        </p>
      </div>
    </div>
  );
};

export default TaskItem;
