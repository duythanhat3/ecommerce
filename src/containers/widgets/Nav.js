import {connect} from 'react-redux';
import Nav from '../../components/widgets/Nav';
import fetchNav from '../../commands/nav/fetchNav';

const mapStateToProps = (state) => {
    //console.log(state);
    let nav = state.nav;
    let menu = '';
    if(nav.menu !== undefined){
        menu = nav.menu.data;
    }
    return {menu};
};

const mapDispatchToProps = (dispatch) => ({});

const Container = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default class Navs extends Container {
    componentDidMount() {
        super.componentDidMount();
        this.store.dispatch(fetchNav());
    }
};