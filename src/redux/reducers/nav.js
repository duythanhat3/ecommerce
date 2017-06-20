import {handleActions} from 'redux-actions';
import {SET_NAV} from '../actions/configs';

export default handleActions({
    [SET_NAV]: (nav, action) => action.payload.nav,
}, []);