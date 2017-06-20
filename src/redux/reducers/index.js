import {combineReducers} from 'redux';
import users from './users';
import fetchingUsers from './fetchingUsers';
import banners from './banners';
import nav from './nav';

export default combineReducers({
    users,
    fetchingUsers,
    banners,
    nav
})