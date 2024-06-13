import React from 'react';
import {useAppDispatch, useAppSelector} from "./redux/store";
import {actions} from "./redux/counterSlice";

const App = () => {

    const {count1value} = useAppSelector(state => state.slice1);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h2>{count1value}</h2>
            <button onClick={() => dispatch(actions.increment())}>increment</button>
            <button onClick={() => dispatch(actions.decrement())}>decrement</button>
            <button onClick={() => dispatch(actions.reset(10))}>reset</button>
        </div>
    );
};

export default App;
