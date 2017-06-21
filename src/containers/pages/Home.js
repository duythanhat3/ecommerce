import {connect} from 'react-redux';
import Home from '../../components/pages/Home';
import fetchHome from '../../commands/home/fetchHome';

const mapStateToProps = (state) => {
    //console.log(state);
    let home = state.home;
    let slider = '';
    if (home.slider !== undefined) {
        slider = home.slider.data;
    }
    return {slider};
};

const mapDispatchToProps = (dispatch) => ({});

const Container = connect(mapStateToProps, mapDispatchToProps)(Home);

export default class Homes extends Container {
    componentDidMount() {
        super.componentDidMount();
        this.store.dispatch(fetchHome());
    }
};