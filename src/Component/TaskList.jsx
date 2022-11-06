import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import TaskContext from "../Context/TaskContext";
import TaskTable from "./TaskTable";

function TaskList() {
 
  const Task = useSelector(state => state.task)
  console.log(Task);
    const Context = useContext(TaskContext);
    let { getTasks, tasks } = Context;
        useEffect(() => {
          getTasks()
          console.log({ ...tasks, ...Task })
          // eslint-disable-next-line
        }, [])
        
    console.log(tasks);
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Task</th>
              <th scope="col">Time</th>
              <th scope="col">Date</th>
              <th scope="col">Assigned By</th>
              <th scope="col">Assigned To</th>
              <th scope="col">Deadline</th>
              <th scope="col">Status</th>
              <th scope="col">Priority</th>
            </tr>
          </thead>
          {tasks.map((task) => {
            return (
              <TaskTable
                title = {task.title}
                key={task.id}
                status={task.status}
                deadline={task.due_on}
                AssignedBy={"Manohar Pathonik"}
                AssignedTo={"Arvind Karmarkar"}
              />
            );
          })}
        </table>
      </div>
    );
}

export default TaskList;
