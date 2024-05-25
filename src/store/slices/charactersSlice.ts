import {createSlice} from "@reduxjs/toolkit";

// тут в initialState прописуємо наші states, тобто те, що нам потрібно зберігати
const initialState = {
    characters: [],
    prevPage: null,
    nextPage: null
};
const charactersSlice = createSlice({
    name: 'characterSlice',
    initialState,
    reducers: {
        setResponce: (state, action) => {
            const {info: {prev, next}, results} = action.payload;
            state.characters = results;
            state.nextPage = next;
            state.prevPage = prev;
        }
    }
})

const {reducer: charactersReducer, actions} = charactersSlice;

const charactersActions={
    ...actions
}

export {
    charactersReducer,
    charactersActions
}