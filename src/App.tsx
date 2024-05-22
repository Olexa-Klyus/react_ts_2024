import React, {useState} from 'react';
import './App.css';
import OneComponent from "./components/OneComponent";
import TwoComponent from "./components/TwoComponent";
import {useSelector} from "react-redux";


const App = () => {

    const {count} = useSelector(state => state.counter1);

    const {count: count2} = useSelector(state => state.counter2);

    return (
        <div>
            <div>
                count : {count}
            </div>
            <div>
                count2 : {count2}
            </div>

            <OneComponent/>
            <TwoComponent/>
        </div>
    );
}

export default App;
