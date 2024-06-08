import React, {useEffect} from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import {useStore} from "./context/ContextProvider";
import {userService} from "./services/apiService";


// зробили в APP, бо неохота було MainLayout робити

const App = () => {

    const {userStore, userStore: {favoriteUser}} = useStore();

    useEffect(() => {
        userService.getUsers().then(value => {
            userStore.setAllUsers(value.data);
        })
    }, []);


    return (
        <div>
            <Header/>
            <Outlet/>
            <hr/>
            {favoriteUser && <div>{favoriteUser.email}</div>}
            <hr/>

        </div>
    );
}

export default App;
