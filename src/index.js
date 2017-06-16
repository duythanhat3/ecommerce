import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/configStore';
import {router} from './routing';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {router.renderRoutes()}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
