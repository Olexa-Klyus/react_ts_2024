import {IPost} from "../../models";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services";
import {AxiosError} from "axios";

type PostSliceType = {
    posts: IPost[];
}
const postInitState: PostSliceType = {
    posts: []
}

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (arg, thunkAPI) => {
        try {
            const posts = await postService.getAll();
            return thunkAPI.fulfillWithValue(posts);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    })

const postSlice = createSlice({
    name: 'postSlice',
    initialState: postInitState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state, action) => {
                //...
            })
})

const postActions = {
    ...postSlice.actions,
    loadPosts
};

export {
    postSlice,
    postActions
}