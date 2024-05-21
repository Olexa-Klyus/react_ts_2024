import React from 'react';
import {useDispatch} from "react-redux";
import {counterActions} from "../redux/slices/counterSlice";

const OneComponent = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(counterActions.inc())}>inc</button>
            <button onClick={() => dispatch(counterActions.dec())}>dec</button>
            <button onClick={() => dispatch(counterActions.reset())}>reset</button>
        </div>
    );
};

export default OneComponent;