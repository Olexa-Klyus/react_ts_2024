import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";

const MainLayout: FC = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};
export default MainLayout;
