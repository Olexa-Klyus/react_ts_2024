import React from 'react';
import {Link, NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            Header
            <br/>
            <NavLink to={'/'}>Home Page</NavLink>
            <br/>
            <NavLink to={'users'}>Users Page</NavLink>
            <hr/>
        </div>
    );
};

export default HeaderComponent;