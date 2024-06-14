import {IPost} from "../../models";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services/apiService";
import {AxiosError} from "axios";

type PostSliceType = {
    posts: IPost[]
}

const initialState: PostSliceType = {
    posts: []
}

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const posts = await postService.getAll();
            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)

const postSlice = createSlice({
        name: 'postSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    state.posts = action.payload
                })

    }
)

const {reducer: postsReducer, actions} = postSlice;

const postsActions={
    ...actions,
    getAll
}
export {
    postsReducer,
    postsActions
}