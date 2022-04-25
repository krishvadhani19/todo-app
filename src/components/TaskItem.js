import React from "react";
import taskContext from "../context/tasks/TaskContext";
import { useContext } from "react";

const TaskItem = (props) => {
  const context = useContext(taskContext);
  const { deleteTask } = context;
  const { task } = props;
  return (
    <div className="col-md-3">
      <div class="card my-3" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{task.title}</h5>
          <i
            className="far fa-trash-alt mx-2"
            onClick={() => {
              deleteTask(task.id);
            }}
          ></i>
        </div>
        <p class="card-text">{task.description}</p>
      </div>
    </div>
  );
};

export default TaskItem;
