import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul>
                <h2>Header</h2>
                <li><Link to={''}>home</Link></li>
                <li><Link to={'users'}>users</Link></li>
                <li>< Link to={'posts'}>posts</Link></li>
            </ul>
        </div>
    );
};

export default Header;