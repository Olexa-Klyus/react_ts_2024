import {IUser} from "../../models";
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {userService} from "../../services/apiService";
import {AxiosError} from "axios";

type UserSliceType = {
    users: IUser[];
    user: IUser | null;
    isLoaded: boolean;
}

const initialState: UserSliceType = {
    users: [],
    user: null,
    isLoaded: false
}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await userService.getAll();
            thunkAPI.dispatch(userActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(users);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }

    }
)

const loadUserById = createAsyncThunk(
    'userSlice/loadUserById',
    async (id: string | undefined, thunkAPI) => {
        if (id) {
            try {
                const user = await userService.getById(id);
                thunkAPI.dispatch(userActions.changeLoadState(true));
                return thunkAPI.fulfillWithValue(user);
            } catch (e) {
                const error = e as AxiosError;
                return thunkAPI.rejectWithValue(error.response?.data)
            }
        }
        return null
    })

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        changeLoadState: (state, action) => {
            state.isLoaded = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;

            })
            .addCase(loadUsers.rejected, (state, action) => {
                //.....
            })
            .addCase(loadUserById.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(loadUserById.rejected, (state, action) => {
                //.....
            })
            .addMatcher(isFulfilled(loadUserById, loadUsers), (state, action) => {
                // state.isLoaded = true
            })
});

const userActions = {
    ...userSlice.actions,
    loadUsers,
    loadUserById
};

export {
    userSlice,
    userActions
}