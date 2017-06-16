import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';


const Users = ({users, status, error}) => {
    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'error') {
        return <p className="text-danger">{error}</p>;
    }

    return (
        <div>
            <h1>Users</h1>
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    status: PropTypes.string,
    error: PropTypes.string,
};

Table.propTypes = {
// Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    size: PropTypes.string,
    bordered: PropTypes.bool,
    striped: PropTypes.bool,
    inverse: PropTypes.bool,
    hover: PropTypes.bool,
    reflow: PropTypes.bool,
    responsive: PropTypes.bool
};


export default Users;
