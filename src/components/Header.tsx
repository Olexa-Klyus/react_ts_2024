import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>

            </ul>
        </div>
    );
};

export default Header;