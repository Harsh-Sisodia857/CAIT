export const addedTask = (task) => {
    return (dispatch) => {
        dispatch({
            type: "newTask",
            payload : task
        })
    }
}