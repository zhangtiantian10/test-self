module.exports = (state = {h: ""}, action) => {
    if (action.type === "GET_HELLO") {
        state.h = "hello word";
        return Object.assign({}, state);
    } else {
        return state;
    }
};