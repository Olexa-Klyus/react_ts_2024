import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices";
import {useDispatch, useSelector} from "react-redux";
import {postsReducer} from "./slices/postSlice";

const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postsReducer
    }
});

const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

export {
    store,
    useAppSelector,
    useAppDispatch
}