import {handleActions} from 'redux-actions';
import {SET_USERS} from '../actions/configs';

export default handleActions({
    [SET_USERS]: (users, action) => action.payload.users,
}, []);