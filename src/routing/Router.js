import React from 'react';
import matchRoute from './matchRoute';
import Routes from './Routes';

export default class Router {
    constructor({routes, defaultRoute}) {
        this.routes = this.sortRoutes(routes);
        this.defaultRoute = defaultRoute;
        this.currentRoute = null;
        this.currentMatch = null;
        this.location = null;
        this.history = null;
    }

    renderRoutes() {
        return <Routes routes={this.routes} defaultRoute={this.defaultRoute} onMatched={this.onRouteMatched.bind(this)} />;
    }

    onRouteMatched({route, match, location, history}) {
        this.currentRoute = route;
        this.currentMatch = match;
        this.location = location;
        this.history = history;
    }

    matchRoute(path) {
        return matchRoute(this.routes, path);
    }

    findRoute(name) {
        return this.routes.find(route => route.name === name);
    }

    isCurrentRoute(routeName) {
        return this.currentRoute && this.currentRoute.name === routeName;
    }

    sortRoutes(routes) {
        return [...routes].sort((route1, route2) => {
            return route2.path.length - route1.path.length
        });
    }
}