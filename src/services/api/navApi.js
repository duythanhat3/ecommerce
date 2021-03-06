import axios from 'axios';
import {FET_MENU_API} from './configs';

export default {
    fetchMenu: () => (
        axios({
            method: 'get',
            url: FET_MENU_API
        })
    ),
};