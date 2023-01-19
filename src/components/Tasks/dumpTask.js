import React from "react";

const dumpTask = () => {
  return (
    <div>
      <div
        className="bg-dark-400 rounded-lg p-3 w-[35%] flex flex-col space-y-5"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        {/* Heading */}
        <div className="text-3xl text-center font-bold font-head-primary">
          Edit Task
        </div>

        <div className="flex flex-col space-y-3">
          {/* Title */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="title" className="text-xl my-auto">
              Title:
            </label>
            <input
              type="text"
              className="rounded p-1 bg-dark-100 text-xl w-[2/3]"
              id="title"
              name="title"
              value={task.title}
              onChange={onChange}
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="description" className="text-xl my-auto">
              Description:
            </label>
            <textarea
              type="text"
              className="rounded p-1 bg-dark-100 text-xl resize-y max-h-32 overflow-y-auto"
              id="description"
              name="description"
              value={task.description}
              onChange={onChange}
              required
            />
          </div>
        </div>

        {/* Close and Save Button */}
        <div className="flex space-x-5 justify-end">
          {/* Close Button */}
          <button className="button" ref={refClose}>
            Close
          </button>

          {/* Save Changes button */}
          <button
            className="button"
            disabled={task.title.length < 5 || task.description.length < 5}
            onClick={handleEditClick}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default dumpTask;
