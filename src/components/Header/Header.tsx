import React from 'react';
import {NavLink} from "react-router-dom";


import css from './Header.module.css'

const Header = () => {

    return (
        <div className={css.Header}>

            <NavLink to={'/users'}>Users Page</NavLink>
            <NavLink to={'/posts'}>Posts Page</NavLink>

        </div>
    );
};

export default Header;