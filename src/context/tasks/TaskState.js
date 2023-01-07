import React from "react";
import TaskContext from "./taskContext";
import { useState } from "react";

const TaskState = (props) => {
  const host = "http://localhost:5000";
  const tasksInitial = [];
  const [tasks, setTasks] = useState(tasksInitial);

  // api call to fetch all tasks
  const getTasks = async () => {
    const response = await fetch(`${host}/api/tasks/getalltasks`, {
      method: "GET",
      headers: {
        authtoken: localStorage.getItem("token"),
      },
    });
    const json = [await response.json()];
    setTasks(json);
  };

  // api call to add a task
  const addTask = async (title, description) => {
    const response = await fetch(`${host}/api/tasks/addtask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description }),
    });
    const json = await response.json();
    const newTasks = tasks.concat(json);
    setTasks(newTasks);
  };

  // api call to edit a task
  const editTask = async (id, title, description) => {
    const response = await fetch(`${host}/api/tasks/edittask/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description }),
    });
    await response.json();

    const newTasks = await JSON.parse(JSON.stringify(tasks));

    for (let index = 0; index < newTasks.length; index++) {
      const element = newTasks[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        break;
      }
    }
    setTasks(newTasks);
  };

  // api call to delete a task
  const deleteTask = async (id) => {
    await fetch(`${host}/api/tasks/deletetask/${id}`, {
      method: "DELETE",
      headers: {
        authtoken: localStorage.getItem("token"),
      },
    });
    const newTasks = tasks.filter((task) => {
      return task._id !== id;
    });
    setTasks(newTasks);
  };

  // api call for login

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
        addTask,
        deleteTask,
        editTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
