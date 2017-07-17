module.exports = (state = {h: ""}, action) => {
    if (action.type === "GET_HELLO") {
        state.h = action.data;
        return Object.assign({}, state);
    } else {
        return state;
    }
};