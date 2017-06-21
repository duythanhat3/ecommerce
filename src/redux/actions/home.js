import {createAction} from 'redux-actions';
import {SET_HOME} from './configs';

export const setHome = createAction(SET_HOME, home => ({home}));