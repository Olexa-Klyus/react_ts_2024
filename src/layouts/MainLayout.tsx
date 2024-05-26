import React from 'react';
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const MainLayout = () => {
    const {loading,error} = useSelector(state => state.cars)

    return (
        <div>
            {loading &&<h3>Loading...</h3>}
            {error &&<h3>...{error}...</h3>}
            <Outlet/>
        </div>
    );
};

export default MainLayout;