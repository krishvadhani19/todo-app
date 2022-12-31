import React from "react";
import { useContext } from "react";
import taskContext from "./../context/tasks/taskContext";

const TaskItem = (props) => {
  const context = useContext(taskContext);
  const { deleteTask } = context;
  const { task, refFunc } = props;
  return (
    <div className="bg-slate-800 rounded-md flex w-[85%]  sm:w-[40%] lg:w-[25%] text-white p-3 m-5  justify-between border-4 border-sky-400">
      <div className="flex flex-col justify-between w-[90%]">
        <div className=" text-2xl">{task.title}</div>
        <div className="w-full h-10">{task.description}</div>
      </div>
      <div className="flex flex-col w-[10%] bg-slate-600">
        <div className="">
          <i
            className="fa-solid fa-pen m-2 cursor-pointer"
            onClick={() => {
              refFunc(task);
            }}
          ></i>
        </div>
        <div>
          <i
            className="far fa-trash-alt m-2 cursor-pointer"
            onClick={() => {
              deleteTask(task._id, task.title, task.description);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
