import React, { useContext, useEffect, useRef, useState } from "react";
import taskContext from "context/tasks/taskContext";
import TaskItem from "components/Tasks/TaskItem";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import Addtask from "components/Home/Addtask";

const Tasks = () => {
  let navigate = useNavigate();
  const context = useContext(taskContext);
  const { tasks, getTasks, editTask } = context;

  const refClose = useRef(null);
  const ref = useRef(null);

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });

  const handleEditClick = () => {
    editTask(task.id, task.title, task.description);
    setTask({
      id: "",
      title: "",
      description: "",
    });
    refClose.current.click();
  };

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const updateTask = (taskItem) => {
    ref.current.click();
    setTask({
      id: taskItem._id,
      title: taskItem.title,
      description: taskItem.description,
    });
  };

  // useEffect to get tasks
  useEffect(() => {
    if (localStorage.getItem("token")) {
      // eslint-disable-next-line
      getTasks();
    } else {
      navigate("/login");
    }
  }, [task]);

  return (
    <div className="w-full font-body-primary">
      {/* AddTask */}
      <div>
        <Addtask task={task} setTask={setTask} />
      </div>

      {/* Your Tasks */}
      <div className="bg-dark-100 text-white flex flex-col space-y-4 w-full">
        {/* Heading */}
        <div className="text-5xl text-center font-head-primary font-bold">
          Your Tasks!
        </div>

        <button
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        {/* Edit Task */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content bg-dark-100">
              <div className="modal-header">
                <h5
                  className="modal-title text-2xl font-head-primary"
                  id="exampleModalLabel"
                >
                  Edit Note
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="my-3 flex flex-col space-y-5">
                  <div className="bg-dark-200 p-2 rounded-lg">
                    <label htmlFor="title" className="text-lg input-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="input-text text-xl"
                      id="title"
                      name="title"
                      value={task.title}
                      aria-describedby="emailHelp"
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="bg-dark-200 p-2 rounded-lg">
                    <label
                      htmlFor="description"
                      className="input-label text-lg"
                    >
                      Description
                    </label>
                    <textarea
                      type="text"
                      className="input-text text-xl resize-y max-h-28 overflow-y-auto"
                      id="description"
                      name="description"
                      value={task.description}
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  ref={refClose}
                  type="button"
                  className="button"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  disabled={
                    task.title.length < 5 || task.description.length < 5
                  }
                  onClick={handleEditClick}
                  type="button"
                  className="btn button"
                >
                  Update Task
                </button>
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
            return <TaskItem key={v4()} task={task} updateTask={updateTask} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
