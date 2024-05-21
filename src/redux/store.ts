import {configureStore} from "@reduxjs/toolkit";
import {counterReducer} from "./slices/counterSlice";

const store = configureStore({reducer: {counter1: counterReducer}});

export {store}