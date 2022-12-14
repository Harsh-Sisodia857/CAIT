import React from "react";
import AddTask from "./AddTask";
import TaskDetail from "./TaskDetail";
function Task() {
  const value = new Date();
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div
      className="d-flex justify-content-between"
      style={{ borderRadius: 17 }}
    >
      <div className="card" style={{ marginTop: 10 }}>
        <div className="card-header d-flex justify-content-between">
          <span>Task</span>
          <span>
            <span className="icon">
              <img src="./icons/calendar.png" alt="" />
              <span>
                {month[value.getMonth()]} {value.getDate()},
                {value.getFullYear()}
              </span>
            </span>
          </span>
        </div>
        <div className="card-body d-flex justify-content-between">
          <TaskDetail
            color={"#e68a00"}
            taskStatus={"Ongoing"}
            taskNumber={66}
          />
          <TaskDetail
            color={"#ff0000"}
            taskStatus={"Delayed"}
            taskNumber={24}
          />
          <TaskDetail
            color={"#66ff33"}
            taskStatus={"Completed"}
            taskNumber={10}
          />
          <TaskDetail
            color={"#6666ff"}
            taskStatus={"Total Assigned"}
            taskNumber={100}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
       <AddTask/>
      </div>
    </div>
  );
}

export default Task;
