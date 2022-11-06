import React from 'react'

function TaskDetail({ color, taskNumber, taskStatus }) {
  return (
    <div style={{ backgroundColor: color, borderRadius: 20,width : 150,padding: 10,fontSize: 20,color: "white" }}>
      <div className="taskNumber">{taskNumber}</div>
      <div className="taskStatus">{taskStatus}</div>
    </div>
  );
}

export default TaskDetail