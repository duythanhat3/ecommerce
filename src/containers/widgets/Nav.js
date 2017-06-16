import React from 'react';
import {url} from '../../routing';
import Nav from '../../components/widgets/Nav';

export default class NavWidget extends React.Component {
    getMenu() {
        let menu = [{
            path: '/',
            label: 'Home',
            checkingOptions: true,
        }, {
            path: url.to('packages.list'),
            label: 'Packages',
        }, {
            path: url.to('users'),
            label: 'Users',
        }];

        menu.forEach(item => Object.assign(item, {
            active: url.isCurrent(item.path, item.checkingOptions || {}),
        }));

        return menu;
    }

    render() {
        return <Nav menu={this.getMenu()} />
    }
}