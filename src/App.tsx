import React, {useReducer} from 'react';
import './App.css';


interface CounterState {
    count: number
}

interface CounterAction {
    type: string,
    payload: number;
}


const callbackReducer = (state: CounterState, action: CounterAction): CounterState => {

    switch (action.type) {
        case 'inc':
            state.count += action.payload;
            return {...state}
        case 'dec':
            state.count += action.payload;
            return {...state}
        case 'reset':
            state.count = action.payload;
            return {...state}
    }

    return {count: -5000000};
};


const App = () => {

    const [state, dispatch] = useReducer(callbackReducer, {count: 0})

    return (
        <div>
            <h2>{state.count}</h2>
            <button onClick={() =>
                dispatch({type: 'inc', payload: 1})
            }>increment
            </button>

            <button onClick={() =>
                dispatch({type: 'dec', payload: -1})
            }>decrement
            </button>

            <button onClick={() =>
                dispatch({type: 'reset', payload: 0})
            }>reset
            </button>

        </div>
    );
}

export default App;
