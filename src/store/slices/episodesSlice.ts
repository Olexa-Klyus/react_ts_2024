import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    prev: null,
    next: null,
    episodes: null
}


const episodesSlice = createSlice({
    name: 'episodesSlice',
    initialState,
    reducers: {}
})


const {reducer: episodesReducer, actions} = episodesSlice;

const episodesActions = {
    ...actions
}

export {
    episodesReducer,
    episodesActions
}