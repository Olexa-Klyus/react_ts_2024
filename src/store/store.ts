import {configureStore} from "@reduxjs/toolkit";
import {characrersReducer, episodesReducer} from "./slices";

const store = configureStore({
    reducer: {
        episodes:episodesReducer,
        characters:characrersReducer
    }
})

export {
    store
}