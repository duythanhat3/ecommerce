import React from 'react';
import Nav from '../../containers/widgets/Nav';

export default ({children}) => (
    <div>
        <Nav />
        <div>
            {children}
        </div>
    </div>
);