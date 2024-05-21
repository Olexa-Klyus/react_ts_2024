import React, {useState} from 'react';
import './App.css';
import OneComponent from "./components/OneComponent";
import TwoComponent from "./components/TwoComponent";
import {useSelector} from "react-redux";


const App = () => {

    const {count} = useSelector(state => state.counter1)
    return (
        <div>
            count : {count}
            {/*count2 : {count2}*/}
            <OneComponent/>
            {/*<TwoComponent/>*/}
        </div>
    );
}

export default App;
