import {createAction} from 'redux-actions';
import {SET_BANNERS} from './configs';

export const setBanners = createAction(SET_BANNERS, banners => ({banners}));