import React from 'react';
import {Link} from 'react-router-dom';

export default ({menu}) => (
    <nav>
        <div>
            <div id="navbar">
                <ul>
                    {menu.map(item => (
                        <li key={item.path} className={item.active ? 'active' : null}>
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
);
