module.exports = (state = {users: []}, action) => {
    if (action.type === "GET_ALL_USERS") {
        action.data = [{
            name: "wangjun",
            sex: "female",
            age: 20,
            username: "xxxx",
            tel: "15667025121",
            mail: "123456789@qq.com",
            remark: "sjfksdjflk"
        }, {
            name: "wangjun",
            sex: "female",
            age: 20,
            username: "xxxx",
            tel: "15667025121",
            mail: "123456789@qq.com",
            remark: "sjfksdjflk"
        }];
        state.users = action.data;
        return Object.assign({}, state);
    } else {
        return state;
    }
};