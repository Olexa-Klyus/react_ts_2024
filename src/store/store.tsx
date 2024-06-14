import {configureStore} from "@reduxjs/toolkit";
import {postSlice, userSlice} from "./slices";
import {useDispatch, useSelector} from "react-redux";


const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    }
});

const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

export {
    store,
    useAppSelector,
    useAppDispatch
}