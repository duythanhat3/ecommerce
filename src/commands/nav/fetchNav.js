import navApi from '../../services/api/navApi';
import {setNav} from '../../redux/actions/nav';

export default () => dispatch => {

    return navApi.fetchMenu()
        .then(response => {
            let nav = {};
            nav.menu = response;
            //console.log(nav);
            dispatch(setNav(nav));
        })
        .catch(error => error);
};