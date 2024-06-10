import {IPost, IUser} from "../models";
import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService, userService} from "../services";
import {AxiosError} from "axios";
import {useDispatch, useSelector} from "react-redux";

type UserSliceType = {
    users: IUser[];
}
const userInitState: UserSliceType = {
    users: []
}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await userService.getAll();
            console.log(users)
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }

    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {},

    // всі асинхронні функції описуємо в extraReducers
    extraReducers: (builder) =>
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                //...
            })
})

const userActions = {
    ...userSlice.actions,
    loadUsers
};
//--------------------------------------------------------------------------------------
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
//--------------------------------------------------------------------------------------

const store = configureStore({
    reducer: {
        userSlice: userSlice.reducer,
        postSlice: postSlice.reducer
    },
})
//--------------------------------------------------------------------------------------

const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();


export {
    store,
    userActions,
    postActions,
    useAppDispatch,
    useAppSelector
}

