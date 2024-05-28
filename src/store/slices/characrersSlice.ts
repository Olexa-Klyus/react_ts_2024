import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services";

const initialState = {
    characters: []
}

const getAll = createAsyncThunk(
    'characrersSlice/getAll',
    async ({ids}, thunkAPI) => {
        try {
            return await characterService.getByIds(ids);
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const characrersSlice = createSlice({
    name: 'characrersSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.characters = action.payload
            })
})

const {reducer: characrersReducer, actions} = characrersSlice;

const characrersActions = {
    ...actions,
    getAll
};

export {
    characrersReducer,
    characrersActions
}