import React from 'react';
import {Jumbotron, Button} from 'reactstrap';

export default ({title,href}) => {
    return (
        <div>
            <Jumbotron className="p-2 mb-0">
                <p className="lead mb-1 mx-auto">{title} <Button href={href} color="primary">View detail</Button></p>
            </Jumbotron>
        </div>
    )
};
