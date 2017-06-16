import NotFound from '../components/pages/404';
import DefaultLayout from '../components/layouts/Default';
import app from './app';
import packages from './package';
import user from './user';

export default {
    routes: [
        ...app,
        ...packages,
        ...user,
    ],
    defaultRoute: {
        component: NotFound,
        layout: DefaultLayout,
    },
};