import React from 'react';
import './App.css';
import {counter2Reducer, decrement, increment, incrementByAmount, useAppDispatch, useAppSelector} from "./redux/store";


const App = () => {

    const dispatch = useAppDispatch();
    const counter1State = useAppSelector(state => state.counter1SliceState.value)
    const counter2State = useAppSelector(state => state.counter2SliceState.value)
    return (
        <div>
            <h2>{counter1State}</h2>

            <button onClick={() => {
                dispatch(increment())
            }}> increment
            </button>

            <button onClick={() => {
                dispatch(decrement())
            }}> decrement
            </button>

            <button onClick={() => {
                dispatch(incrementByAmount(10))
            }}> increment of 10
            </button>
            <hr/>

            // --------------------------------------------------------------------------------------------------
            {/*<h2>{counter2Reducer}</h2>*/}
            <h2>{counter2State}</h2>
            <button onClick={() => {
                dispatch(increment())
            }}> increment
            </button>

            <button onClick={() => {
                dispatch(decrement())
            }}> decrement
            </button>

            <button onClick={() => {
                dispatch(incrementByAmount(10))
            }}> increment of 10
            </button>

        </div>
    );
}

export default App;
