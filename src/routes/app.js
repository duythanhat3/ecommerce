import DefaultLayout from '../components/layouts/Default';
import Home from '../components/pages/Home';

export default [{
    path: '/',
    exact: true,
    component: Home,
    layout: DefaultLayout,
}];