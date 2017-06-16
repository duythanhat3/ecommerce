import {connect} from 'react-redux';
import Users from '../../components/pages/Users';
import fetchUsers from '../../commands/user/fetchUsers';

const mapStateToProps = (state) => ({
    users: state.users,
    status: state.fetchingUsers.status,
    error: state.fetchingUsers.error,
});

const mapDispatchToProps = (dispatch) => ({});

const Container = connect(mapStateToProps, mapDispatchToProps)(Users);

export default class UsersPages extends Container {
    componentDidMount() {
        super.componentDidMount();
        this.store.dispatch(fetchUsers());
    }
};
