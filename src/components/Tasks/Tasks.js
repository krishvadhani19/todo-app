import React, { useContext, useEffect, useRef, useState } from "react";
import taskContext from "context/tasks/taskContext";
import TaskItem from "components/Tasks/TaskItem";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

const Tasks = () => {
  let navigate = useNavigate();
  const context = useContext(taskContext);
  const { tasks, getTasks, editTask } = context;

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
    refClose.current.click();
  };

  // useEffect to get tasks
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // eslint-disable-next-line
      getTasks();
    } else {
      navigate("/login");
    }
  }, [getTasks, navigate]);

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-dark-100 text-white flex flex-col space-y-4 w-full">
      {/* Heading */}
      <div className="text-5xl text-center font-head-primary font-bold">
        Your Tasks!
      </div>

      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{
              borderRadius: "5px",
              padding: "20px",
              boxShadow: "2px 2px 10px",
            }}
          >
            <div className={`modal-content `}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Task
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
                      required
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
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={refClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={
                    task.title.length < 5 || task.description.length < 5
                  }
                  onClick={handleClick}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="grid grid-cols-3 gap-4">
        <div className={`${tasks.length !== 0 ? "d-none" : ""}`}>
          {tasks.length === 0 && "No Tasks to display"}
        </div>
        {tasks.map((task) => {
          return <TaskItem key={v4()} task={task} refFunc={refFunc} />;
        })}
      </div>
    </div>
  );
};

export default Tasks;
