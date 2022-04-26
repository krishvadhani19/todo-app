import React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import taskContext from "../context/tasks/TaskContext";
import TaskItem from "./TaskItem";

const Tasks = () => {
  const context = useContext(taskContext);
  const { tasks, getTasks } = context;
  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, []);

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });

  const ref = useRef(null);

  const handleClick = () => {};

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-5">
      <h2>Your Tasks!</h2>
      <div>
        <button
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          ref={ref}
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          
        >
          <div className="modal-dialog" 
          style={{
            borderRadius: "5px",
            padding: "20px",
            boxShadow: "2px 2px 10px",
          }}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                {/* Modal Body */}
                <form>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={task.title}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      value={task.description}
                      onChange={onChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Add Task
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleClick}
                  disabled={
                    task.title.length < 5 || task.description.length < 5
                  }
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <div className="container mx-2">
          {tasks.length === 0 && "No Tasks to display"}
        </div>
        {tasks.map((task) => {
          return <TaskItem key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
};

export default Tasks;
