import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "./counterSlice";
import {useDispatch, useSelector} from "react-redux";


const store = configureStore({
    reducer: {
        slice1: counterSlice.reducer
    }
});

// типізуємо сукупним типом всіх слайсів наш хук
const useAppSelector = useSelector.withTypes <ReturnType<typeof store.getState>>();

type AppDispatch = typeof store.dispatch;
const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export {
    store,
    useAppSelector,
    useAppDispatch
}

