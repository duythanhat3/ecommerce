import userApi from '../../services/api/userApi';
import {setUsers} from '../../redux/actions/users';
import {fetchingUsersStart, fetchingUsersSuccess, fetchingUsersError} from '../../redux/actions/fetchingUsers';

export default () => dispatch => {
    dispatch(fetchingUsersStart());

    return userApi.fetch()
        .then(users => {
            dispatch(setUsers(users));
            dispatch(fetchingUsersSuccess());
        })
        .catch(error => dispatch(fetchingUsersError(error)));
};