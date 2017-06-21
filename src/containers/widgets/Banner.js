import {connect} from 'react-redux';
import Banner from '../../components/widgets/Banner';
import fetchBanners from '../../commands/banner/fetchBanners';

const mapStateToProps = (state) => {
    let title = '';
    let href = '';
    if (state.banners.data) {
        title = state.banners.data.title;
        href = state.banners.data.link;
    }

    return {
        title,
        href
    };
};

const mapDispatchToProps = (dispatch) => ({});

const Container = connect(mapStateToProps, mapDispatchToProps)(Banner);

export default class Banners extends Container {
    componentDidMount() {
        super.componentDidMount();
        this.store.dispatch(fetchBanners());
    }
};
