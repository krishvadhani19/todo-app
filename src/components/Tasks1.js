import React from "react";
import { useContext, useRef, useState, useEffect } from "react";
import taskContext from "../context/tasks/TaskContext";
import TaskItem from "./TaskItem";
import { useNavigate } from "react-router-dom";

const Tasks1 = () => {
  let navigate = useNavigate();
  const context = useContext(taskContext);
  const { tasks, getTasks, editTask, mode } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // eslint-disable-next-line
      getTasks();
    } else {
      navigate("/login");
    }
  }, []);

  const refClose = useRef(null);
  const ref = useRef(null);

  const refFunc = (taskItem) => {
    ref.current.click();
    setTask({
      id: taskItem._id,
      title: taskItem.title,
      description: taskItem.description,
    });
  };

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });

  const handleClick = () => {
    editTask(task.id, task.title, task.description);
    console.log(task.id);
    refClose.current.click();
  };

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return <div>Tasks1</div>;
};

export default Tasks1;
