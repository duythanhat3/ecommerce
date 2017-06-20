import React from 'react';
import Nav from '../../containers/widgets/Nav';
import Banner from '../../containers/widgets/Banner';

export default ({children}) => (
    <div>
        <Banner/>
        <Nav />
        <div>
            {children}
        </div>
    </div>
);