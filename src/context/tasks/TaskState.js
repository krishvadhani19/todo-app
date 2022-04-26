import React from "react";
import TaskContext from "./TaskContext";
import { useState } from "react";

const TaskState = (props) => {
  const host = "http://localhost:5000";
  const tasksInitial = [];
  const [tasks, setTasks] = useState(tasksInitial);

  // api call to fetch all tasks
  const getTasks = async () => {
    const response = await fetch(`${host}/api/tasks/fetchalltasks`, {
      // mode: "no-cors",
      method: "GET",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1ZmVjZTVjMzkzMjlmZmNjZTQyMzVhIn0sImlhdCI6MTY1MDYwODEyM30.JyMNfN6QVe5gN0THidsL7Yel_VrxaKnJ3DgnCjls40o",
      },
    });
    const json = await response.json();
    setTasks(json);
  };

  // api call to add a task
  const addTask = async (title, description) => {
    const response = await fetch(`${host}/api/tasks/addtask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1ZmVjZTVjMzkzMjlmZmNjZTQyMzVhIn0sImlhdCI6MTY1MDYwODEyM30.JyMNfN6QVe5gN0THidsL7Yel_VrxaKnJ3DgnCjls40o",
      },
      body: JSON.stringify({ title, description }),
    });
    const json = await response.json();
    let newTasks = [tasks.concat(json)];
    setTasks(newTasks);
  };

  // api call to edit a task
  const editTask = async (id, title, description) => {
    const response = await fetch(`${host}/api/tasks/edittask/${id}`, {
      method: "PUT",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1ZmVjZTVjMzkzMjlmZmNjZTQyMzVhIn0sImlhdCI6MTY1MDYwODEyM30.JyMNfN6QVe5gN0THidsL7Yel_VrxaKnJ3DgnCjls40o",
      },
      body: JSON.stringify({ title, description }),
    });
    const updateTask = await response.json();

    const newTasks = JSON.parse(JSON.stringify(tasks));

    for (let index = 0; index < newTasks.length; index++) {
      const element = newTasks[index];
      if (element._id === id) {
        element.title = updateTask.title;
        element.description = updateTask.description;
        break;
      }
    }
    setTasks(newTasks);
  };

  // api call to delete a task
  const deleteTask = async (id) => {
    const response = await fetch(`${host}/api/tasks/deletetask/${id}`, {
      method: "DELETE",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1ZmVjZTVjMzkzMjlmZmNjZTQyMzVhIn0sImlhdCI6MTY1MDYwODEyM30.JyMNfN6QVe5gN0THidsL7Yel_VrxaKnJ3DgnCjls40o",
      },
    });
    const newTasks = tasks.filter((task) => {
      return task._id !== id;
    });
    setTasks(newTasks);
  };

  // Toggle Mode
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#010107";
      document.body.style.color = "white";
      document.title = "todoApp - Dark Mode";
      setMode("dark");
    } else {
      document.title = "todoApp - Dark Mode";
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      setMode("light");
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
        addTask,
        deleteTask,
        editTask,
        toggleMode,
        mode,
      }}
    >
      {" "}
      {props.children}{" "}
    </TaskContext.Provider>
  );
};

export default TaskState;
