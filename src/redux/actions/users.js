import {createAction} from 'redux-actions';
import {SET_USERS} from './configs';

export const setUsers = createAction(SET_USERS, users => ({users}));