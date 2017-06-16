import React from 'react';
import {withRouter} from 'react-router';
import matchRoute from './matchRoute';

export default withRouter(({routes, defaultRoute, onMatched, location, history}) => {
    let {route, match} = matchRoute(routes, location.pathname);

    if (onMatched) {
        onMatched({route, match, location, history});
    }

    route = route || defaultRoute;

    if (!route) {
        return null;
    }

    let component = <route.component {...{route, match, location, history}} />;

    return route.layout ? <route.layout>{component}</route.layout> : component;
});