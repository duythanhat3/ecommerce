import axios from 'axios';
import {FET_HOME_SLIDER} from './configs';

export default {
    fetchSlider: () => (
        axios({
            method: 'get',
            url: FET_HOME_SLIDER
        })
    ),
};