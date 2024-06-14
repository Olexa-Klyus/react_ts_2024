import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {postSlice, userSlice} from "./slices";

const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    },
})
//--------------------------------------------------------------------------------------

const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();


export {
    store,
    useAppDispatch,
    useAppSelector
}