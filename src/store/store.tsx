import {configureStore} from "@reduxjs/toolkit";
import {carReduser} from "./slices";

const store = configureStore({
    reducer: {
        cars:carReduser
    }
})

export {
    store
}