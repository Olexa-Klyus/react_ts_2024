import {configureStore} from "@reduxjs/toolkit";
import {episodesReducer} from "./slices";

const store = configureStore({
    reducer: {
        episodes:episodesReducer
    }
})

export {
    store
}