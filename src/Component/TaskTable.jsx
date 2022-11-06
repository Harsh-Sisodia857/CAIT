import React from 'react'

function TaskTable({title, status, deadline, AssignedBy, AssignedTo }) {
  function getDateOfTask(str) {
    var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  function getTimeOfTask(str) {
    var date = new Date(str)
    var hrs = date.getUTCHours();
    var min = date.getUTCMinutes();
    if (hrs < 12) {
       return `${hrs}:${min} AM`;

    }
    return `${hrs-12}:${min} PM`;
  }

  const getStatusColor = (status) => {
    if (status === "completed")
      return "#66ff33";
    if (status === "pending")
      return "#e68a00";
    if (status === "delayed")
      return "#ff0000";
  }
    return (
      <tbody>
        <tr>
          <td>{title.substr(0,20)}</td>
          <td>{getTimeOfTask(deadline)}</td>
          <td>{getDateOfTask(deadline)}</td>
          <td>{AssignedBy}</td>
          <td>{AssignedTo}</td>
          <td>{getDateOfTask(deadline)}</td>
          <td>
            <div
              className="status"
              style={{ backgroundColor: getStatusColor(status) }}
            ></div>
          </td>
          <td>High</td>
        </tr>
      </tbody>
    );
}

export default TaskTable