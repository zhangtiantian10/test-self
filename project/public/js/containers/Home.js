import {connect} from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state) => {
    return {
        users: state.getAllUsers.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsers: () => {
            dispatch({type: "GET_ALL_USERS"});
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);