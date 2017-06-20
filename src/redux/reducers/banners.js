import {handleActions} from 'redux-actions';
import {SET_BANNERS} from '../actions/configs';

export default handleActions({
    [SET_BANNERS]: (banners, action) => action.payload.banners,
}, []);