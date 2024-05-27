import {configureStore} from "@reduxjs/toolkit";
import {characrersReduser, episodesReducer} from "./slices";

const store = configureStore({
    reducer: {
        episodes:episodesReducer,
        characters:characrersReduser
    }
})

export {
    store
}