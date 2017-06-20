import {createAction} from 'redux-actions';
import {SET_NAV} from './configs';

export const setNav = createAction(SET_NAV, nav => ({nav}));