import TaskContext from './TaskContext';
import React, { useState } from 'react'

function TaskState(props) {
    const tasksInitial = []
    const [tasks, setTasks] = useState(tasksInitial);

    // Get all tasks
    const getTasks = async() => {
        const response = await fetch("https://gorest.co.in/public/v2/todos", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json()
        setTasks(json)
    }

    return (
        <TaskContext.Provider value={{ getTasks ,tasks }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState