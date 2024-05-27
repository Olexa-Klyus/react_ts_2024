import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services";

const initialState = {
    characrers: []
}

const getAll = createAsyncThunk(
    'characrersSlice/getAll',
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await characterService.getByIds(ids);
            return data
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
                state.characrers = action.payload
            })
})

const {reduser: characrersReduser, actions} = characrersSlice;

const characrersActions = {
    ...actions,
    getAll
};

export {
    characrersReduser,
    characrersActions
}