import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";


function AddTask() {
  const ref = useRef(null);
  const refClose = useRef(null);
  const dispath = useDispatch();
  const actions = bindActionCreators(actionCreators, dispath)
  const [task, setTask] = useState({
    taskName: "",
    description: "",
    relatedto: "",
    assignedTo: "",
    deadline: new Date().toISOString().slice(0, 10),
    priority: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    setTask({
      taskName: "",
      description: "",
      relatedto: "",
      assignedTo: "",
      deadline: new Date().toISOString().slice(0, 10),
      priority: "",
    });
    actions.addedTask(task);
    refClose.current.click();
  };

  const onChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <button
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        type="button"
        ref={ref}
        className="btn addtaskbutton"
      >
        <img className="icons" src="./icons/plus.png" alt="" />
        <span>Add Task</span>
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Task
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="taskName" className="form-label">
                      Task Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="taskName"
                      name="taskName"
                      placeholder="Write Task Name"
                      onChange={onChange}
                      value={task.name}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows="3"
                      placeholder="Write Description"
                      onChange={onChange}
                      value={task.description}
                    ></textarea>
                  </div>

                  <label htmlFor="relatedto" className="form-label">
                    Related To
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="relatedto"
                    name="relatedto"
                    onChange={onChange}
                    value={task.relatedto}
                  />
                </div>
                <div className="col addborder">
                  <label htmlFor="assignedTo" className="form-label">
                    Assigned To
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="assignedTo"
                    onChange={onChange}
                    value={task.assignedTo}
                    name="assignedTo"
                  />
                </div>
                <div className="col">
                  <label htmlFor="deadline" className="form-label">
                    Set Deadline
                  </label>

                  <input
                    type="date"
                    className="form-control"
                    id="deadline"
                    name="deadline"
                    placeholder="Date"
                    onChange={onChange}
                    value={task.deadline}
                  />

                  <label
                    htmlFor="priority"
                    className="form-label"
                    style={{ marginTop: 20 }}
                  >
                    Set Priority
                  </label>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="priority1">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="priority"
                        id="priority1"
                        onChange={onChange}
                        value={"High"}
                      />
                      High
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="priority2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="priority"
                        id="priority2"
                        onChange={onChange}
                        value={"Medium"}
                      />
                      Medium
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="priority3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="priority"
                        id="priority3"
                        onChange={onChange}
                        value={"Low"}
                      />
                      Low
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleClick}
                className="btn btn-primary"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
