import axios from 'axios';
import {FET_BANNER_API} from './configs';

export default {
    fetch: () => (
        axios({
            method: 'get',
            url: FET_BANNER_API
        })
    ),
};