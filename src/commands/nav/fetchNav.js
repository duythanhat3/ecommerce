import navApi from '../../services/api/navApi';
import {setNav} from '../../redux/actions/nav';

export default () => dispatch => {

    let nav;
    return navApi.fetchMenu()
        .then(response => {
            nav.menu = response;
            console.log(nav);
            dispatch(setNav(nav));
        })
        .catch(error => error);
};