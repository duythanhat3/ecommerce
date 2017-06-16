import {createAction} from 'redux-actions';
import {FETCHING_USERS_START, FETCHING_USERS_SUCCESS, FETCHING_USERS_ERROR} from './configs';

export const fetchingUsersStart = createAction(FETCHING_USERS_START);
export const fetchingUsersSuccess = createAction(FETCHING_USERS_SUCCESS);
export const fetchingUsersError = createAction(FETCHING_USERS_ERROR, error => ({error}));
