import React, { useContext, useEffect } from "react";
import TaskContext from "../Context/TaskContext";
import TaskTable from "./TaskTable";

function TaskList() {
      const Context = useContext(TaskContext);
    const { getTasks, tasks } = Context;
    console.log(tasks);
        useEffect(() => {
          getTasks();
          console.log(tasks);
          // eslint-disable-next-line
        }, [])
    
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
