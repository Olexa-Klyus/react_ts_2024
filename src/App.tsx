import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {postActions, userActions} from "./redux/slices";
import {Outlet} from "react-router-dom";
import Header from "./components/Header";

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
        dispatch(postActions.loadPosts());
    }, []);

    return (
        <div>
            <Header/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default App;
