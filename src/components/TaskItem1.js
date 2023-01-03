import React from "react";
import { useContext } from "react";
import taskContext from "../context/tasks/TaskContext";

const TaskItem1 = (props) => {
  const context = useContext(taskContext);
  const { deleteTask } = context;
  const { task, refFunc } = props;
  return (
    <div className="bg-dark-200 rounded-md flex">
      <div className="flex flex-col">
        <div>{task.title}</div>
        <div>{task.description}</div>
      </div>
      <div className="flex flex-col">
        <div>
          <i
            className="fa-solid fa-pen mx-2 my-2"
            onClick={() => {
              refFunc(task);
            }}
          ></i>
        </div>
        <div>
          <i
            className="far fa-trash-alt mx-2 my-2"
            onClick={() => {
              deleteTask(task._id, task.title, task.description);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default TaskItem1;
