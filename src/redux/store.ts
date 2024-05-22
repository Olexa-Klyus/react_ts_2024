import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "./slices/counterSlice";
import {counter2Reducer} from "./slices/counter2.Slice";

const store = configureStore({
    reducer: {
        counter1: counterReducer,
        counter2: counter2Reducer,
    }
});


export {store}