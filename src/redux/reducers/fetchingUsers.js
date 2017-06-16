import {handleActions} from 'redux-actions';
import {FETCHING_USERS_START, FETCHING_USERS_SUCCESS, FETCHING_USERS_ERROR} from '../actions/configs';

export default handleActions({
    [FETCHING_USERS_START]: (fetchingUsers, action) => ({status: 'loading', error: null}),
    [FETCHING_USERS_SUCCESS]: (fetchingUsers, action) => ({status: 'success', error: null}),
    [FETCHING_USERS_ERROR]: (fetchingUsers, action) => ({status: 'error', error: action.payload.error}),
}, {status: null, error: null});
