const reducer = (state={},action) => {
    if (action.type === "newTask") {
        return {...state,...action.payload}
    }
    else
        return state;
}

export default reducer;
