import bannerApi from '../../services/api/bannerApi';
import {setBanners} from '../../redux/actions/banners';

export default () => dispatch => {
    return bannerApi.fetch()
        .then(response => {
            dispatch(setBanners(response));
        })
        .catch(error => error);
};