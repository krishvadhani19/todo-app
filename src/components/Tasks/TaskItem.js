import React, { useContext } from "react";
import taskContext from "context/tasks/taskContext";
import LightEditIcon from "components/icons/Light/edit";
import LightDeleteIcon from "components/icons/Light/delete";

const TaskItem = (props) => {
  const context = useContext(taskContext);
  const { deleteTask } = context;
  const { task, refFunc } = props;

  return (
    <div className="bg-dark-200 rounded-xl flex justify-between w-[23%] text-white p-3 h-44">
      {/* Title & Description */}
      <div className="flex flex-col space-y-2 w-[90%]">
        {/* Title */}
        <div className=" text-2xl">Workout!</div>

        {/* description */}
        <div className="w-full overflow-y-auto">
          With Hooks, you can extract stateful logic from a component so it can
          be tested independently and reused. Hooks allow you to reuse stateful
          logic without changing your component hierarchy. This makes it easy to
          share Hooks among many components or with the community.
        </div>
      </div>

      {/* edit and delete icon */}
      <div className="flex flex-col justify-between">
        <div
          className="cursor-pointer"

          // onClick={() => {
          //   refFunc(task);
          // }}
        >
          <LightEditIcon size="25" color="#ffffff" />
        </div>
        <div
          className="cursor-pointer"
          // onClick={() => {
          //   deleteTask(task._id, task.title, task.description);
          // }}
        >
          <LightDeleteIcon size="25" color="#ffffff" />
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
