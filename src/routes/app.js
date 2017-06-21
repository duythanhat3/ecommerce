import DefaultLayout from '../components/layouts/Default';
import Home from '../containers/pages/Home';

export default [{
    path: '/',
    exact: true,
    component: Home,
    layout: DefaultLayout,
}];