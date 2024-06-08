import React from 'react';
import './App.css';
import {decrement, increment, incrementByAmount, useAppDispatch, useAppSelector} from "./redux/store";


const App = () => {

    const dispatch = useAppDispatch();
    const counter1State = useAppSelector(state => state.counter1SliceState.value)
    return (
        <div>
            <h2>{counter1State}</h2>
            <button onClick={() => {
                dispatch(increment())
            }}> inc
            </button>

            <button onClick={() => {
                dispatch(decrement())
            }}> dec
            </button>

            <button onClick={() => {
                dispatch(incrementByAmount(10))
            }}> inc of 10
            </button>
        </div>
    );
}

export default App;
