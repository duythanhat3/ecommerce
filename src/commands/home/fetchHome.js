import homeApi from '../../services/api/homeApi';
import {setHome} from '../../redux/actions/home';

export default () => dispatch => {
    return homeApi.fetchSlider()
        .then(response => {
            let home = {};
            home.slider = response;
            //console.log(home);
            dispatch(setHome(home));
        })
        .catch(error => error);
};