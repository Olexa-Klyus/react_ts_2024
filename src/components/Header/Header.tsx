import React from 'react';
import {Link, NavLink} from "react-router-dom";


import css from './Header.module.css'

const Header = () => {
    return (
        <div>
            Header
            <br/>
            <NavLink to={'/'}>Users Page</NavLink>
            <br/>
            <NavLink to={'posts'}>Posts Page</NavLink>
            <hr/>
        </div>
    );
};

export default Header;