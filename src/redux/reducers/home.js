import {handleActions} from 'redux-actions';
import {SET_HOME} from '../actions/configs';

export default handleActions({
    [SET_HOME]: (home, action) => action.payload.home,
}, []);