import React from 'react';
import SimpleSlider from '../widgets/_SimpleSlider';
const Home = ({slider}) => {
    return (
        <div className="ml-5 mr-5 mt-3">
            <SimpleSlider slider={slider} />
        </div>
    );
};

export default Home;
