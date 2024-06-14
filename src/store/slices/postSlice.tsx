import {IPost} from "../../models";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../services/apiService";
import {AxiosError} from "axios";

type PostSliceType = {
    posts: IPost[];
    postsUser: IPost[] | null;
}

const initialState: PostSliceType = {
    posts: [],
    postsUser: []
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

const getByUserId = createAsyncThunk(
    'postSlice/getByUserId',
    async (id: string | undefined, thunkAPI) => {
        if (id) {
            try {
                const posts = await postService.getPostsByUserId(id);
                return thunkAPI.fulfillWithValue(posts);
            } catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data)
            }
        }
        return null
    })

const postSlice = createSlice({
        name: 'postSlice',
        initialState,
        reducers: {},
        extraReducers: builder =>
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    state.posts = action.payload
                })
                .addCase(getByUserId.fulfilled, (state, action) => {
                    state.postsUser = action.payload
                })

    }
)

const {actions} = postSlice;

const postsActions = {
    ...actions,
    getAll,
    getByUserId
}
export {
    postSlice,
    postsActions
}