import React from "react";
import taskContext from "../context/tasks/TaskContext";
import { useContext } from "react";

const TaskItem = (props) => {
  const context = useContext(taskContext);
  const { deleteTask } = context;
  const { task } = props;
  return (
    <div className="col-md-3">
      <div
        className="card my-3"
        style={{
          borderRadius: "5px",
          padding: "20px",
          boxShadow: "2px 2px 10px",
          width: "18rem",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">{task.title}</h5>
          <i
            className="far fa-trash-alt mx-2"
            onClick={() => {
              deleteTask(task.id);
            }}
          ></i>
        </div>
        <p className="card-text">{task.description}</p>
      </div>
    </div>
  );
};

export default TaskItem;
