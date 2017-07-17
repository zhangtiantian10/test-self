import {connect} from 'react-redux';
import Hello from '../components/hello';

const mapStateToProps = (state) => {
    return {
        hello: state.hello.h
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHello: () => {
            dispatch({type: "GET_HELLO"});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);