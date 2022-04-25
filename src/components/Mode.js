import React from "react";
import taskContext from "../context/tasks/TaskContext";
import { useContext } from "react";

const Mode = () => {
  const context = useContext(taskContext);
  const { toggleMode, mode } = context;
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckChecked"
        onClick={toggleMode}
      />
      <label
        className={`form-check-label text-${
          mode === "light" ? "dark" : "light"
        }`}
        htmlFor="flexSwitchCheckChecked"
      >
        {mode === "light" ? "Enable" : "Disable"} Dark Mode
      </label>
    </div>
  );
};

export default Mode;
