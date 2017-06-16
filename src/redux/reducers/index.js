import {combineReducers} from 'redux';
import users from './users';
import fetchingUsers from './fetchingUsers';

export default combineReducers({
    users,
    fetchingUsers,
})