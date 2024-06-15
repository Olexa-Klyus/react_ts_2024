import {IUser} from "../../models";
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {userService} from "../../services";
import {AxiosError} from "axios";

type UserSliceType = {
    users: IUser[];
    isLoaded: boolean;
    user: IUser | null;
}
const userInitState: UserSliceType = {
    users: [],
    isLoaded: false,
    user: null
}

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await userService.getAll();
            //щоб доступитися до нашої синхронної операції звідси звертаємося через  thunkAPI.dispatch
            thunkAPI.dispatch(userActions.changeLoadState(true));
            return thunkAPI.fulfillWithValue(users);

        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }

    }
);
const loadUserById = createAsyncThunk(
    'userSlice/loadUserById',
    async (id: string | null, thunkAPI) => {
        try {
            const users = await userService.getById(id);
            return thunkAPI.fulfillWithValue(users);

        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.response?.data);
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState: userInitState,
    reducers: {
        changeLoadState: (status, action: PayloadAction<boolean>) => {
            status.isLoaded = action.payload
        }
    },

    // всі асинхронні функції описуємо в extraReducers
    extraReducers: (builder) =>
        builder
            .addCase(loadUsers.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action) => {
                //...
            })
            .addCase(loadUserById.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addMatcher(isFulfilled(loadUsers), (state, action) => {
                state.isLoaded = true;
            })
})


const userActions = {
    ...userSlice.actions,
    loadUsers,
    loadUserById
};

export {
    userSlice,
    userActions
}