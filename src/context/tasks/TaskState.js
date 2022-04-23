import React from "react";
import TaskContext from "./TaskContext";
import {
  useState
} from "react";

const TaskState = ( props ) => {
    const host = "http://localhost:5000";
    const tasksInitial = [];
    const [ tasks, setTasks ] = useState( tasksInitial );

    // api call to fetch all tasks
    const getTasks = () => {
      const response = await fetch( `$(host)/api/tasks/fetchalltasks`, {
        method: 'GET',
        headers: {
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1ZmVjZTVjMzkzMjlmZmNjZTQyMzVhIn0sImlhdCI6MTY1MDYwODEyM30.JyMNfN6QVe5gN0THidsL7Yel_VrxaKnJ3DgnCjls40o'
        }
      } );
      const json = await response.json();
      setTasks( json );
    };

    // api call to add a task
    const addTask = () => {
      const response = await fetch( `$(host)/api/tasks/addtask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1ZmVjZTVjMzkzMjlmZmNjZTQyMzVhIn0sImlhdCI6MTY1MDYwODEyM30.JyMNfN6QVe5gN0THidsL7Yel_VrxaKnJ3DgnCjls40o'
        }
      } );
      const json = await response.json();
      let newTasks = [ tasks.concat( json ) ];
      setTasks( newTasks );
    };

    // api call to delete a task
    const deleteTask = ( id ) => {
      const response = await fetch( `$(host)/api/tasks/deletetask/${id}`, {
        method: 'DELETE',
        headers: {
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1ZmVjZTVjMzkzMjlmZmNjZTQyMzVhIn0sImlhdCI6MTY1MDYwODEyM30.JyMNfN6QVe5gN0THidsL7Yel_VrxaKnJ3DgnCjls40o'
        }
      } );
      const json = await response.json();
      const newTasks = tasks.filter( ( task ) => {
        return task.id !== id
      } );
      setTasks( newTasks );
    };
    // api call to edit a task

    return ( < TaskContext.Provider value = {
        {
          getTasks,
          addTask,
          deleteTask
        }
      } > {
        props.children
      } </TaskContext.Provider>)
    };

    export default TaskState;