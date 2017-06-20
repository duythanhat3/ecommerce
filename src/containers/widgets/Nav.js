import {connect} from 'react-redux';
import Nav from '../../components/widgets/Nav';
import fetchNav from '../../commands/nav/fetchNav';

const mapStateToProps = (state) => {
    let nav = state.nav.data;
    return {nav};
};

const mapDispatchToProps = (dispatch) => ({});

const Container = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default class ContainerC extends Container {
    componentDidMount() {
        super.componentDidMount();
        this.store.dispatch(fetchNav());
    }
};