import React, {useReducer, useState} from 'react';
import './App.css';
import any = jasmine.any;


interface IState {
    value: number;
}


function reduser(state: IState, action: { type: string, payload: number }): null {
    return null;
};


const App = () => {

    const [state, dispatch] = useReducer<IState,any>(reduser, {value: 0})

    const increment = () => {

    };

    const decrement = () => {

    };

    const reset = () => {
        setCounter({value: 0});
    };

    return (
        <div>
            <h2>{counter.value}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default App;
