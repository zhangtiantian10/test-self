import {combineReducers} from 'redux';
import hello from './hello';
import getAllUsers from './home';

export default combineReducers({
    hello,
    getAllUsers
});